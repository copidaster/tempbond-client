import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthorizedLayout } from './authorized.layout';

import { ShopPageProvider } from "./pages/shop/shop.provider";
import { ProductDetailsPage } from "./pages/product-details/product-details.page";
import { CollaborationGroups } from './pages/collaboration-groups/collaboration.page';
import { EventsPage } from './pages/events/events.page';
import { HomePage } from './pages/home/home.page';
import { ResourcesPage } from "./pages/resources/resources.page";
import { SettingsPage } from "./pages/settings/settings.page";
import { AcconuntSection } from "./pages/settings/account/account.section";
import { ChangePassword } from "./pages/settings/change-password/change-password.section";

export const AuthorizedRoutes = () => {
  return (
    <Routes>
      <Route
        path={pagesMap.homePage}
        element={
          <AuthorizedLayout>
            <HomePage />
          </AuthorizedLayout>
        }
      />
      <Route
        path={pagesMap.shop}
        element={
          <AuthorizedLayout>
            <ShopPageProvider />
          </AuthorizedLayout>
        }
      />
      <Route
        path={pagesMap.events}
        element={
          <AuthorizedLayout>
            <EventsPage />
          </AuthorizedLayout>
        }
      />
      <Route
        path={pagesMap.resources}
        element={
          <AuthorizedLayout>
            <ResourcesPage />
          </AuthorizedLayout>
        }
      />
      <Route
        path={pagesMap.collaborationGroups}
        element={
          <AuthorizedLayout>
            <CollaborationGroups />
          </AuthorizedLayout>
        }
      />
      <Route
        path={pagesMap.productDetails}
        element={
          <AuthorizedLayout>
            <ProductDetailsPage />
          </AuthorizedLayout>
        }
      />
      <Route
        path={"settings/account-details"}
        element={
          <AuthorizedLayout>
            <SettingsPage>
              <AcconuntSection />
            </SettingsPage>
          </AuthorizedLayout>
        }
      />
      <Route
        path={"settings/change-password"}
        element={
          <AuthorizedLayout>
            <SettingsPage>
              <ChangePassword />
            </SettingsPage>
          </AuthorizedLayout>
        }
      />
    </Routes>
  );
};

export const pagesMap = {
  homePage: "/",
  shop: "/shop",
  events: "/events",
  resources: "/resources",
  collaborationGroups: "/collaboration-groups",
  productDetails: "/products/:id",
};
