import { ROUTES } from "@/app/resources/routes-constants";
import DefaultLayout from "@/layouts/DefaultLayout/DefualtLayout";
import TechSerivces from "@/pages/TechServices";
import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const Home = lazy(() => import("@/pages/Home"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        // errorElement={<ErrorPage />}
        element={<DefaultLayout />}
      >
        <Route path={ROUTES.home} index element={<Home />} />
        <Route path={ROUTES.techServices}  element={<TechSerivces />} />
      </Route>
    </Route>,
  ),
);

const Routing = () => {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Routing;
