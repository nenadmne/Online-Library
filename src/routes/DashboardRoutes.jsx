import { Fragment } from "react";
import { Navigate, Route } from "react-router-dom";
import Activities from "../pages/activities/Activities";
import Dashboard, { reservationLoader } from "../pages/dashboard/Dashboard";
import PrivateRoute from "../privateRoutes/PrivateRoute";

const dashboardRoutes = (
  <Fragment>
    <Route index element={<Navigate replace to="/dashboard" />} />
    <Route path="/dashboard" element={<PrivateRoute />}>
      <Route
        path="/dashboard"
        element={<Dashboard />}
        loader={reservationLoader}
        errorElement={true}
      />
    </Route>
    <Route path="/activities" element={<PrivateRoute />}>
      <Route index element={<Activities />} />
    </Route>
  </Fragment>
);

export default dashboardRoutes;
