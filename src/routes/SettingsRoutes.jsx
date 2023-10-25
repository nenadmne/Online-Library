import { Fragment } from "react";
import { Route } from "react-router-dom";
import Polisa from "../pages/settings/Polisa";
import Kategorije, {
  CategoryLoader,
} from "../pages/settings/settingsPages/kategorije/Kategorije";
import Zanrovi, {
  GenresLoader,
} from "../pages/settings/settingsPages/zanrovi/Zanrovi";
import Izdavac, {
  PublisherLoader,
} from "../pages/settings/settingsPages/izdavac/Izdavac";
import Povez, {
  BookbindsLoader,
} from "../pages/settings/settingsPages/povez/Povez";
import Format, {
  FormatLoader,
} from "../pages/settings/settingsPages/format/Format";
import Pismo, {
  LanguagesLoader,
} from "../pages/settings/settingsPages/pismo/Pismo";
import NovaKategorija from "../pages/settings/settingsPages/kategorije/NovaKategorija";
import NoviPovez from "../pages/settings/settingsPages/povez/NoviPovez";
import NovoPismo from "../pages/settings/settingsPages/pismo/NovoPismo";
import NoviIzdavac from "../pages/settings/settingsPages/izdavac/NoviIzdavac";
import NoviFormat from "../pages/settings/settingsPages/format/NoviFormat";
import NoviZanr from "../pages/settings/settingsPages/zanrovi/NoviZanr";
import PrivateRoute from "../privateRoutes/PrivateRoute";

const settingsRoutes = (
  <Fragment>
    <Route path="/settings" element={<PrivateRoute />}>
      <Route path="/settings" element={<Polisa />} />
    </Route>
    <Route path="/settings/categories" element={<PrivateRoute />}>
      <Route
        path="/settings/categories"
        element={<Kategorije />}
        loader={CategoryLoader}
        errorElement={true}
      />
    </Route>
    <Route path="/settings/zanrovi" element={<PrivateRoute />}>
      <Route
        path="/settings/zanrovi"
        element={<Zanrovi />}
        loader={GenresLoader}
        errorElement={true}
      />
    </Route>
    <Route path="/settings/izdavac" element={<PrivateRoute />}>
      <Route
        path="/settings/izdavac"
        element={<Izdavac />}
        loader={PublisherLoader}
        errorElement={true}
      />
    </Route>
    <Route path="/settings/povez" element={<PrivateRoute />}>
      <Route
        path="/settings/povez"
        element={<Povez />}
        loader={BookbindsLoader}
        errorElement={true}
      />
    </Route>
    <Route path="/settings/format" element={<PrivateRoute />}>
      <Route
        path="/settings/format"
        element={<Format />}
        loader={FormatLoader}
        errorElement={true}
      />
    </Route>
    <Route path="/settings/pismo" element={<PrivateRoute />}>
      <Route
        path="/settings/pismo"
        element={<Pismo />}
        loader={LanguagesLoader}
        errorElement={true}
      />
    </Route>
    <Route path="/settings/pismo/new" element={<PrivateRoute />}>
      <Route path="/settings/pismo/new" element={<NovoPismo />} />
    </Route>
    <Route path="/settings/izdavac/new" element={<PrivateRoute />}>
      <Route path="/settings/izdavac/new" element={<NoviIzdavac />} />
    </Route>
    <Route path="/settings/format/new" element={<PrivateRoute />}>
      <Route path="/settings/format/new" element={<NoviFormat />} />
    </Route>
    <Route path="/settings/povez/new" element={<PrivateRoute />}>
      <Route path="/settings/povez/new" element={<NoviPovez />} />
    </Route>
    <Route path="/settings/categories/new" element={<PrivateRoute />}>
      <Route path="/settings/categories/new" element={<NovaKategorija />} />
    </Route>
    <Route path="/settings/zanrovi/new" element={<PrivateRoute />}>
      <Route path="/settings/zanrovi/new" element={<NoviZanr />} />
    </Route>
  </Fragment>
);

export default settingsRoutes;
