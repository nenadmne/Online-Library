import { Fragment } from "react";
import { Route } from "react-router-dom";
import Librarians, { LoaderLibrarians } from "../pages/librarians/Librarians";
import NewLibrarian from "../pages/librarians/NewLibrarian";
import EditLibrarian from "../pages/librarians/EditLibrarian";
import LibrarianProfile, {
  LibrarianProfileLoader,
} from "../pages/librarianProfile/LibrarianProfile";
import AdminRoute from "../privateRoutes/AdminRoute";

const librarianRoutes = (
  <Fragment>
    <Route path="/librarians" element={<AdminRoute />}>
      <Route
        path="/librarians"
        element={<Librarians />}
        loader={LoaderLibrarians}
        errorElement={true}
      />
    </Route>
    <Route path="/librarians/new" element={<AdminRoute />}>
      <Route path="/librarians/new" element={<NewLibrarian />} />
    </Route>
    <Route path="/librarians/:id" element={<AdminRoute />}>
      <Route
        path="/librarians/:id"
        element={<LibrarianProfile />}
        loader={LibrarianProfileLoader}
        errorElement={true}
      />
    </Route>
    <Route path="/librarians/:id/edit" element={<AdminRoute />}>
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
