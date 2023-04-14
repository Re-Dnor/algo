import { Routes, Route } from "react-router";
import { RoutingPaths } from "../shared/routing";

function Routing() {
  return (
    <Routes>
      {RoutingPaths.map(({ path, element, id }) => (
        <Route path={path} key={id} element={element} />
      ))}
    </Routes>
  );
}

export default Routing;
