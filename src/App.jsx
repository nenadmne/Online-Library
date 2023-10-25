import { Fragment } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import booksRoutes from "./routes/BookRoutes";
import settingsRoutes from "./routes/SettingsRoutes";
import studentRoutes from "./routes/StudentRoutes";
import librarianRoutes from "./routes/LibrarianRoutes";
import rentingRoutes from "./routes/RentingRoutes";
import authorRoutes from "./routes/AuthorRoutes";
import dashboardRoutes from "./routes/DashboardRoutes";

// Login/not-found
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Login from "./pages/login/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path="/" element={<AppLayout />}>
        <Route>{dashboardRoutes}</Route>
        <Route>{authorRoutes}</Route>
        <Route>{rentingRoutes}</Route>
        <Route>{booksRoutes}</Route>
        <Route>{settingsRoutes}</Route>
        <Route>{librarianRoutes}</Route>
        <Route>{studentRoutes}</Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/login" element={<Login />} />
    </Fragment>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
