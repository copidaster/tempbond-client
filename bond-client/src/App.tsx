import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { AccountRoutes } from "./pages/account/account.routes";
import { AuthorizedRoutes } from "./pages/authorized/authorized.routes";

function App() {
  return (
    <Router>
      <AccountRoutes />
      <AuthorizedRoutes />
    </Router>
  );
}

export default App;
