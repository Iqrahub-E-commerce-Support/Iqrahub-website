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
const AppDevelopment = lazy(() => import("@/pages/AppDevelopment"));
const MediaStory = lazy(() => import("@/pages/MediaStory"));
const CaseStudy = lazy(() => import("@/pages/CaseStudy"));
const AlmuqtadirCaseStudy = lazy(() => import("@/pages/AlmuqtadirCaseStudy"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        // errorElement={<ErrorPage />}
        element={<DefaultLayout />}
      >
        <Route path={ROUTES.home} index element={<Home />} />
        <Route
          path={`${ROUTES.techServices}${ROUTES.webdesign}`}
          element={<TechSerivces />}
        />
        <Route
          path={`${ROUTES.techServices}${ROUTES.appDevelopment}`}
          element={<AppDevelopment />}
        />
        <Route path={ROUTES.mediaStory} element={<MediaStory />} />
        <Route path={ROUTES.caseStudy} element={<CaseStudy />} />
        <Route
          path={ROUTES.almuqtadirCaseStudy}
          element={<AlmuqtadirCaseStudy />}
        />
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
