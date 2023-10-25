import { Fragment } from "react";
import { Route } from "react-router-dom";
import Students, { LoaderStudents } from "../pages/students/Students";
import NewStudent from "../pages/students/NewStudent";
import EditStudent from "../pages/students/EditStudent";
import StudentProfile, {
  StudentProfileLoader,
} from "../pages/studentProfile/StudentProfile";
import ProfileEvidenceReturned, {
  loaderTestReturned,
} from "../pages/studentProfile/layouts/ProfileEvidenceReturned";
import ProfileEvidenceWrittenOff, {
  loaderTestWrittenOff,
} from "../pages/studentProfile/layouts/ProfileEvidenceWrittenOff";
import ProfileEvidenceExcess, {
  loaderTest,
} from "../pages/studentProfile/layouts/ProfileEvidenceExcess";
import ProfileEvidenceReserved, {
  loaderTestActive,
} from "../pages/studentProfile/layouts/ProfileEvidenceReserved";
import ProfileEvidenceArchived, {
  loaderTestArchived,
} from "../pages/studentProfile/layouts/ProfileEvidenceArhived";
import ProfileEvidenceRented, {
  loaderTestRented,
} from "../pages/studentProfile/layouts/ProfileEvidenceRented";
import PrivateRoute from "../privateRoutes/PrivateRoute";

const studentRoutes = (
  <Fragment>
    <Route path="/students" element={<PrivateRoute />}>
      <Route
        path="/students"
        element={<Students />}
        loader={LoaderStudents}
        errorElement={true}
      />
    </Route>
    <Route path="/students/new" element={<PrivateRoute />}>
      <Route
        path="/students/new"
        element={<NewStudent />}
        errorElement={true}
      />
    </Route>
    <Route path="/students/:id" element={<PrivateRoute />}>
      <Route
        path="/students/:id"
        element={<StudentProfile />}
        loader={StudentProfileLoader}
        errorElement={true}
      />
    </Route>
    <Route path="/students/:id/edit" element={<PrivateRoute />}>
      <Route
        path="/students/:id/edit"
        element={<EditStudent />}
        loader={StudentProfileLoader}
        errorElement={true}
      />
    </Route>
    <Route
      path="/students/:id/evidencija/izdate-knjige"
      element={<PrivateRoute />}
    >
      <Route
        path="/students/:id/evidencija/izdate-knjige"
        element={<ProfileEvidenceReturned />}
        loader={loaderTestReturned}
        errorElement={true}
      />
    </Route>
    <Route
      path="/students/:id/evidencija/vracene-knjige"
      element={<PrivateRoute />}
    >
      <Route
        path="/students/:id/evidencija/vracene-knjige"
        element={<ProfileEvidenceWrittenOff />}
        loader={loaderTestWrittenOff}
        errorElement={true}
      />
    </Route>
    <Route
      path="/students/:id/evidencija/otpisane-knjige"
      element={<PrivateRoute />}
    >
      <Route
        path="/students/:id/evidencija/otpisane-knjige"
        element={<ProfileEvidenceExcess />}
        loader={loaderTest}
        errorElement={true}
      />
    </Route>
    <Route
      path="/students/:id/evidencija/aktivne-rezervacije"
      element={<PrivateRoute />}
    >
      <Route
        path="/students/:id/evidencija/aktivne-rezervacije"
        element={<ProfileEvidenceReserved />}
        loader={loaderTestActive}
        errorElement={true}
      />
    </Route>
    <Route
      path="/students/:id/evidencija/arhivirane-rezervacije"
      element={<PrivateRoute />}
    >
      <Route
        path="/students/:id/evidencija/arhivirane-rezervacije"
        element={<ProfileEvidenceArchived />}
        loader={loaderTestArchived}
        errorElement={true}
      />
    </Route>
    <Route
      path="/students/:id/evidencija/izdate-knjige"
      element={<PrivateRoute />}
    >
      <Route
        path="/students/:id/evidencija/izdate-knjige"
        element={<ProfileEvidenceRented />}
        loader={loaderTestRented}
        errorElement={true}
      />
    </Route>
  </Fragment>
);

export default studentRoutes;
