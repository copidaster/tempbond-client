import * as React from "react";
import { ShopStore } from "../../../../store/shop.store"; // some issues with class import from root

import { ShopPage } from "./shop.page";

export function ShopPageProvider() {
  const store = React.useMemo(() => new ShopStore(), []);
  return (
    <PositionCandidatesStoreContext.Provider value={store}>
      <ShopPage />
    </PositionCandidatesStoreContext.Provider>
  );
}
export const PositionCandidatesStoreContext = React.createContext<ShopStore>(
  {} as any
);
export const useShopStore = () =>
  React.useContext(PositionCandidatesStoreContext);
