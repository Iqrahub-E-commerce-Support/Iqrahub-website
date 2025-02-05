import { ROUTES } from "@/app/resources/routes-constants";
import DefaultLayout from "@/layouts/DefaultLayout/DefualtLayout";
import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const Home = lazy(() => import("@/pages/Home"));
const TechSerivces = lazy(() => import("@/pages/TechServices"));
const MediaStory = lazy(() => import("@/pages/MediaStory"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        // errorElement={<ErrorPage />}
        element={<DefaultLayout />}
      >
        <Route path={ROUTES.home} index element={<Home />} />
        <Route path={ROUTES.techServices} element={<TechSerivces />} />
        <Route path={ROUTES.mediaStory} element={<MediaStory />} />
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
