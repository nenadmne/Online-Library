import { Fragment } from "react";
import { Route } from "react-router-dom";
import Librarians, { LoaderLibrarians } from "../pages/librarians/Librarians";
import NewLibrarian from "../pages/librarians/NewLibrarian";
import EditLibrarian from "../pages/librarians/EditLibrarian";
import LibrarianProfile, {
  LibrarianProfileLoader,
} from "../pages/librarianProfile/LibrarianProfile";
import PrivateRoute from "../privateRoutes/PrivateRoute";

const librarianRoutes = (
  <Fragment>
    <Route path="/librarians" element={<PrivateRoute />}>
      <Route
        path="/librarians"
        element={<Librarians />}
        loader={LoaderLibrarians}
        errorElement={true}
      />
    </Route>
    <Route path="/librarians/new" element={<PrivateRoute />}>
      <Route path="/librarians/new" element={<NewLibrarian />} />
    </Route>
    <Route path="/librarians/:id" element={<PrivateRoute />}>
      <Route
        path="/librarians/:id"
        element={<LibrarianProfile />}
        loader={LibrarianProfileLoader}
        errorElement={true}
      />
    </Route>
    <Route path="/librarians/:id/edit" element={<PrivateRoute />}>
      <Route
        path="/librarians/:id/edit"
        element={<EditLibrarian />}
        loader={LibrarianProfileLoader}
        errorElement={true}
      />
    </Route>
  </Fragment>
);

export default librarianRoutes;
