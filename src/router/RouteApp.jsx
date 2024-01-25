import { Route, Routes } from "react-router-dom";
import Layout from "../layouts";
import { publicRoute } from "./SiteRoute";
import { NoPage } from "../pages";

const RouteApp = () => {
  return (
    <div>
      <Routes>
        {publicRoute.map((route, index) => {
          const {
            path,
            component: Component,
            layout: LayoutSite = Layout,
          } = route;
          if (LayoutSite == null)
            return <Route key={index} path={path} element={<Component />} />;
          return (
            <Route
              key={index}
              path={path}
              element={
                <LayoutSite>
                  <Component />
                </LayoutSite>
              }
            />
          );
        })}
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </div>
  );
};

export default RouteApp;
