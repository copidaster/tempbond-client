import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthorizedLayout } from "./authorized.layout";

import { CollaborationGroups } from "./pages/collaboration-groups/collaboration.page";
import { EventsPage } from "./pages/events/events.page";
import { HomePage } from "./pages/home/home.page";
import { ResourcesPage } from "./pages/resources/resources.page";
import { ShopPage } from "./pages/shop/shop.page";

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
            <ShopPage />
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
    </Routes>
  );
};

export const pagesMap = {
  homePage: "/",
  shop: "/shop",
  events: "/events",
  resources: "/resources",
  collaborationGroups: "/collaboration-groups",
};
