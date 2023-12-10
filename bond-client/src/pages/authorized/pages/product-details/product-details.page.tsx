import * as React from "react";
import { useLocation, useParams } from "react-router-dom";

export const ProductDetailsPage = () => {
  const params = useParams();

  return <div>Hello from ProductDetailsPage {params.id}</div>;
};
