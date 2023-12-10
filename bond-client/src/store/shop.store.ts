import { action, makeObservable, observable, reaction } from "mobx";
import { getCriteria, getProducts } from "../transport/shop/product.api";
import { CriteriaDto, ProductDto } from "../transport/shop/product.dto";
import { debounce } from "lodash";

const PAGE_ITEMS_SIZE = 8;

export class ShopStore {
  public productsIsLoading: boolean = false;
  public criteriaIsLoading: boolean = false;

  public criteria: CriteriaDto | null;

  public search: string = "";
  public selectedCategoryId: number | null;
  public min: number | null = null;
  public max: number | null = null;
  public currentPage: number;
  public totalPageCount: number;

  public products: Array<ProductDto> = [];

  constructor() {
    makeObservable(this, {
      productsIsLoading: observable,
      criteriaIsLoading: observable,
      search: observable,
      currentPage: observable,
      products: observable,
      loadCriteria: action.bound,
      loadProducts: action.bound,
      setMin: action.bound,
      setMax: action.bound,
      setSearch: action.bound,
      setCategory: action.bound,
      setPage: action.bound,
    });

    this.criteria = null;
    this.selectedCategoryId = null;
    this.currentPage = 1;
    this.totalPageCount = 0;

    reaction(
      () => [this.min, this.max, this.selectedCategoryId, this.search],
      () => {
        this.refreshItemsList();
      }
    );
  }

  public refreshItemsList = debounce(() => {
    this.loadProducts();
  }, 500);

  public setMin(min: number) {
    this.min = min;
  }

  public setMax(max: number) {
    this.max = max;
  }

  public setSearch(search: string) {
    this.search = search;
  }

  public setCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
  }

  public setPage(page: number) {
    this.currentPage = page;
    this.loadCriteria();
  }

  public loadCriteria() {
    this.criteriaIsLoading = true;
    setTimeout(() => {
      this.criteria = getCriteria();
      this.criteriaIsLoading = false;
    }, 1000);
  }

  public loadProducts() {
    this.productsIsLoading = true;

    setTimeout(() => {
      const result = getProducts({
        min: this.min,
        max: this.max,
        search: this.search,
        categoryId: this.selectedCategoryId,
        page: this.currentPage,
        pageSize: PAGE_ITEMS_SIZE,
      });

      this.products = result.items;
      this.totalPageCount = result.pageCount;
    }, 1000);
  }
}
