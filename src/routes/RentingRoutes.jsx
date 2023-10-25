import { Fragment } from "react";
import { Route } from "react-router-dom";
import RentingBooks, { LoaderRented } from "../pages/rentingBooks/rentingBooks";
import ReturnedBooks from "../pages/rentingBooks/layouts/returnedBooks";
import WrittenOffBooks from "../pages/rentingBooks/layouts/writtenOffBooks";
import InExcessBooks from "../pages/rentingBooks/layouts/inExcessBooks";
import ActiveReservations, {
  LoaderReservations,
} from "../pages/rentingBooks/layouts/activeReservation";
import ArchivedReservations from "../pages/rentingBooks/layouts/archivedReservations";
import PrivateRoute from "../privateRoutes/PrivateRoute";

const rentingRoutes = (
  <Fragment>
    <Route path="/rentingBooks/izdate-knjige" element={<PrivateRoute />}>
      <Route
        path="/rentingBooks/izdate-knjige"
        element={<RentingBooks />}
        loader={LoaderRented}
        errorElement={true}
      />
    </Route>
    <Route path="/rentingBooks/vracene-knjige" element={<PrivateRoute />}>
      <Route path="/rentingBooks/vracene-knjige" element={<ReturnedBooks />} />
    </Route>
    <Route path="/rentingBooks/otpisane-knjige" element={<PrivateRoute />}>
      <Route
        path="/rentingBooks/otpisane-knjige"
        element={<WrittenOffBooks />}
      />
    </Route>
    <Route
      path="/rentingBooks/knjige-u-prekoracenju"
      element={<PrivateRoute />}
    >
      <Route
        path="/rentingBooks/knjige-u-prekoracenju"
        element={<InExcessBooks />}
        loader={LoaderRented}
        errorElement={true}
      />
    </Route>
    <Route path="/rentingBooks/aktivne-rezervacije" element={<PrivateRoute />}>
      <Route
        path="/rentingBooks/aktivne-rezervacije"
        element={<ActiveReservations />}
        loader={LoaderReservations}
        errorElement={true}
      />
    </Route>
    <Route
      path="/rentingBooks/arhivirane-rezervacije"
      element={<PrivateRoute />}
    >
      <Route
        path="/rentingBooks/arhivirane-rezervacije"
        element={<ArchivedReservations />}
        loader={LoaderReservations}
        errorElement={true}
      />
    </Route>
  </Fragment>
);

export default rentingRoutes;
