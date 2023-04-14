import { Suspense } from "react";
import Routing from "../pages";
import { ErrorBoundary, Header } from "../widgets";
import { withProviders } from "./providers";
import { Fallback } from "../shared/ui";
import "./styles/index.css";

const App = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Fallback />}>
        <Header />
        <Routing />
      </Suspense>
    </ErrorBoundary>
  );
};

export default withProviders(App);
