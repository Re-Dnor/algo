import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

export const withProviders = (app: () => ReactElement) => () => {
  return <BrowserRouter>{app()}</BrowserRouter>;
};
