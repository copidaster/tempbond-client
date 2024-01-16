import {
  CriteriaDto,
  GetProductsRequest,
  GetProductsResponse,
  ProductDto,
} from "./product.dto";

export const getProducts = (_request: GetProductsRequest): GetProductsResponse => {
  const items: Array<ProductDto> = [
    {
      id: 1,
      name: "Watch",
      description: "So good really watch",
      price: 455,
      imgSrc:
        "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjBxNW52NjR4aDVrZDMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.sIeIs_Ru6tODdYsDqNKJK2y4ghPP3GhL6jgq3Z6qbQo/image;s=1920x0;q=70",
    },
    {
      id: 2,
      name: "Watch2",
      description: "So good really watch",
      price: 455,
      imgSrc:
        "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjVsMGg0eTFybHFpcjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.k20vRivzHwjIwWnMkb6iJ3WPrAPvEKCkiZu8LJqRkDs/image;s=1920x0;q=70",
    },
    {
      id: 3,
      name: "Watch3",
      description: "So good really watch",
      price: 455,
      imgSrc:
        "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjVsMGg0eTFybHFpcjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.k20vRivzHwjIwWnMkb6iJ3WPrAPvEKCkiZu8LJqRkDs/image;s=1920x0;q=70",
    },
    {
      id: 4,
      name: "Watch4",
      description: "So good really watch",
      price: 455,
      imgSrc:
        "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjVsMGg0eTFybHFpcjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.k20vRivzHwjIwWnMkb6iJ3WPrAPvEKCkiZu8LJqRkDs/image;s=1920x0;q=70",
    },
    {
      id: 5,
      name: "Watch5",
      description: "So good really watch",
      price: 455,
      imgSrc:
        "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjVsMGg0eTFybHFpcjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.k20vRivzHwjIwWnMkb6iJ3WPrAPvEKCkiZu8LJqRkDs/image;s=1920x0;q=70",
    },
    {
      id: 6,
      name: "Watc6",
      description: "So good really watch",
      price: 455,
      imgSrc:
        "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjVsMGg0eTFybHFpcjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.k20vRivzHwjIwWnMkb6iJ3WPrAPvEKCkiZu8LJqRkDs/image;s=1920x0;q=70",
    },
    {
      id: 7,
      name: "Watch7",
      description: "So good really watch",
      price: 455,
      imgSrc:
        "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjVsMGg0eTFybHFpcjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.k20vRivzHwjIwWnMkb6iJ3WPrAPvEKCkiZu8LJqRkDs/image;s=1920x0;q=70",
    },
  ];

  return {
    items: items,
    pageCount: 40,
  };
};

export const getCriteria = (): CriteriaDto => {
  return {
    min: 100,
    max: 1000,
    categories: [
      { id: 1, name: "Cars" },
      { id: 2, name: "Pets" },
      { id: 3, name: "Dogs" },
      { id: 4, name: "Long so title for elipsis ha ha ha" },
    ],
    topPicks: [
      { id: 1, name: "Pick Cars" },
      { id: 2, name: "Pick Dogs" },
      { id: 3, name: "Dogs" },
      { id: 4, name: "Long so title for elipsis ha ha ha" },
      { id: 5, name: "Long so 2" },
      { id: 6, name: "Lon234g so 2" },
      { id: 7, name: "Long so 2" },
      { id: 8, name: "L23432dsong so 2" },
      { id: 9, name: "Lrong so 2" },
      { id: 10, name: "Logng so 2" },
      { id: 11, name: "Lor23rng so 2" },
      { id: 12, name: "Log24ng so 2" },
    ],
  };
};
