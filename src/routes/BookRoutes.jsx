import { Fragment } from "react";
import { Route } from "react-router-dom";
import Books, { BooksLoader } from "../pages/books/Books";
import BookInfo, { BookLoader } from "../pages/bookInformations/BookInfo";
import NewBook, { LoaderCreateBook } from "../pages/books/NewBook";
import NewBookSpecification from "../pages/books/components/Specification";
import NewBookMultimedia from "../pages/books/components/Multimedia";
import BookSpecification from "../pages/bookInformations/layouts/BookSpecification";
import BookMultimedia from "../pages/bookInformations/layouts/BookMultimedia";
import BookRentEvidence from "../pages/bookInformations/layouts/BookRentEvidence";
import ReturnedEvidence from "../pages/bookInformations/layouts/table-layouts/ReturnedEvidence";
import ExcessEvidence from "../pages/bookInformations/layouts/table-layouts/ExcessEvidence";
import ReservationEvidence from "../pages/bookInformations/layouts/table-layouts/ReservationEvidence";
import ArchivedEvidence from "../pages/bookInformations/layouts/table-layouts/ArchivedEvidence";
import EditBook, { EditBookLoader } from "../pages/books/EditBook";
import EditSpecification from "../pages/books/components/EditSpecification";
import EditMultimedia from "../pages/books/components/EditMultimedia";
import BookInfoWrittenOff from "../pages/books/BookInfoWrittenOff";
import BookInfoReturn from "../pages/books/BookInfoReturn";
import BookInfoRentingBook from "../pages/books/BookInfoRentingBook";
import BookInfoReserve from "../pages/books/BookInfoReserve";
import PrivateRoute from "../privateRoutes/PrivateRoute";

const booksRoutes = (
  <Fragment>
    <Route path="/books" element={<PrivateRoute />}>
      <Route
        path="/books"
        element={<Books />}
        loader={BooksLoader}
        errorElement={true}
      />
    </Route>
    <Route path="/books/:id" element={<PrivateRoute />}>
      <Route
        path="/books/:id"
        element={<BookInfo />}
        loader={BookLoader}
        errorElement={true}
      />
    </Route>
    <Route path="/books/:id/edit" element={<PrivateRoute />}>
      <Route
        path="/books/:id/edit"
        element={<EditBook />}
        loader={EditBookLoader}
        errorElement={true}
      />
    </Route>
    <Route path="/books/:id/edit/specification" element={<PrivateRoute />}>
      <Route
        path="/books/:id/edit/specification"
        element={<EditSpecification />}
        loader={EditBookLoader}
        errorElement={true}
      />
    </Route>
    <Route path="/books/:id/edit/multimedia" element={<PrivateRoute />}>
      <Route path="/books/:id/edit/multimedia" element={<EditMultimedia />} />
    </Route>
    <Route path="/books/:id/otpisi-knjigu" element={<PrivateRoute />}>
      <Route
        path="/books/:id/otpisi-knjigu"
        element={<BookInfoWrittenOff />}
        loader={BookLoader}
        errorElement={true}
      />
    </Route>
    <Route path="/books/:id/vrati-knjigu" element={<PrivateRoute />}>
      <Route
        path="/books/:id/vrati-knjigu"
        element={<BookInfoReturn />}
        loader={BookLoader}
        errorElement={true}
      />
    </Route>
    <Route path="/books/:id/izdaj-knjigu" element={<PrivateRoute />}>
      <Route
        path="/books/:id/izdaj-knjigu"
        element={<BookInfoRentingBook />}
        loader={BookLoader}
        errorElement={true}
      />
    </Route>
    <Route path="/books/:id/rezervisi-knjigu" element={<PrivateRoute />}>
      <Route
        path="/books/:id/rezervisi-knjigu"
        element={<BookInfoReserve />}
        loader={BookLoader}
        errorElement={true}
      />
    </Route>
    <Route path="/books/new/osnovni-detalji" element={<PrivateRoute />}>
      <Route
        path="/books/new/osnovni-detalji"
        element={<NewBook />}
        loader={LoaderCreateBook}
        errorElement={true}
      />
    </Route>
    <Route path="/books/new/specifikacija" element={<PrivateRoute />}>
      <Route
        path="/books/new/specifikacija"
        element={<NewBookSpecification />}
        loader={LoaderCreateBook}
        errorElement={true}
      />
    </Route>
    <Route path="/books/new/multimedija" element={<NewBookMultimedia />} />
    <Route path="/books/:id/specifikacija" element={<PrivateRoute />}>
      <Route
        path="/books/:id/specifikacija"
        element={<BookSpecification />}
        loader={BookLoader}
        errorElement={true}
      />
    </Route>
    <Route path="/books/:id/multimedija" element={<PrivateRoute />}>
      <Route
        path="/books/:id/multimedija"
        element={<BookMultimedia />}
        loader={BookLoader}
        errorElement={true}
      />
    </Route>
    <Route
      path="/books/:id/evidencija/izdate-knjige"
      element={<PrivateRoute />}
    >
      <Route
        path="/books/:id/evidencija/izdate-knjige"
        element={<BookRentEvidence />}
        loader={BookLoader}
        errorElement={true}
      />
    </Route>
    <Route
      path="/books/:id/evidencija/vracene-knjige"
      element={<PrivateRoute />}
    >
      <Route
        path="/books/:id/evidencija/vracene-knjige"
        element={<ReturnedEvidence />}
        loader={BookLoader}
        errorElement={true}
      />
    </Route>
    <Route
      path="/books/:id/evidencija/knjige-u-prekoracenju"
      element={<PrivateRoute />}
    >
      <Route
        path="/books/:id/evidencija/knjige-u-prekoracenju"
        element={<ExcessEvidence />}
        loader={BookLoader}
        errorElement={true}
      />
    </Route>
    <Route
      path="/books/:id/evidencija/aktivne-rezervacije"
      element={<PrivateRoute />}
    >
      <Route
        path="/books/:id/evidencija/aktivne-rezervacije"
        element={<ReservationEvidence />}
        loader={BookLoader}
        errorElement={true}
      />
    </Route>
    <Route
      path="/books/:id/evidencija/arhivirane-rezervacije"
      element={<PrivateRoute />}
    >
      <Route
        path="/books/:id/evidencija/arhivirane-rezervacije"
        element={<ArchivedEvidence />}
        loader={BookLoader}
        errorElement={true}
      />
    </Route>
  </Fragment>
);

export default booksRoutes;
