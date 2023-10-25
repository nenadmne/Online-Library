import { Fragment } from "react";
import { Route } from "react-router-dom";
import Authors, { LoaderAuthors } from "../pages/authors/Authors";
import AuthorProfile, {
  LoaderAuthorProfile,
} from "../pages/authorProfile/AuthorProfile";
import EditAuthor from "../pages/authorProfile/AuthorEdit";
import NewAuthor from "../pages/authors/NewAuthor";
import PrivateRoute from "../privateRoutes/PrivateRoute";

const authorRoutes = (
  <Fragment>
    <Route path="/authors" element={<PrivateRoute />}>
      <Route
        path="/authors"
        element={<Authors />}
        loader={LoaderAuthors}
        errorElement={true}
      />
    </Route>
    <Route path="/authors/:id" element={<PrivateRoute />}>
      <Route
        path="/authors/:id"
        element={<AuthorProfile />}
        loader={LoaderAuthorProfile}
        errorElement={true}
      />
    </Route>
    <Route path="/authors/:id/edit" element={<PrivateRoute />}>
      <Route
        path="/authors/:id/edit"
        element={<EditAuthor />}
        loader={LoaderAuthorProfile}
        errorElement={true}
      />
    </Route>
    <Route path="/authors/new" element={<PrivateRoute />}>
      <Route path="/authors/new" element={<NewAuthor />} />
    </Route>
  </Fragment>
);
export default authorRoutes;
