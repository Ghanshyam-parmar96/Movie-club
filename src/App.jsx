import { lazy } from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import fetchApi from "./utils/fetchApi";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import Protected from "./components/protected/Protected";

// import Home from "./pages/home/Home";
// import SearchResults from "./pages/searchResults/SearchResults";
// import PageNotFound from "./pages/pageNotFound/PageNotFound";
// import Details from "./pages/details/Details";
// import Explore from "./pages/explore/Explore";
// import LoginForm from "./components/loginForm/LoginForm"
// import Date from "./components/Date";

const LoginForm = lazy(() => import("./pages/loginForm/LoginForm"));
const Home = lazy(() => import("./pages/home/Home"));
const Explore = lazy(() => import("./pages/explore/Explore"));
const Details = lazy(() => import("./pages/details/Details"));
const PageNotFound = lazy(() => import("./pages/pageNotFound/PageNotFound"));
const SearchResults = lazy(() => import("./pages/searchResults/SearchResults"));
const Subscribed = lazy(() => import("./pages/subscribed/Subscribed"));

const searchQueryFunc = (request) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("query");
  return fetchApi(`/search/multi?query=${searchTerm}`);
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorBoundary />}>
      <Route
        path="/"
        element={<Home />}
        loader={() => fetchApi("/movie/upcoming")}
      />
      <Route
        path="/:mediaType/:id"
        element={<Details />}
        loader={({ params }) => fetchApi(
          `/${params.mediaType}/${params.id}?append_to_response=videos,credits,recommendations,similar`
        )}
      />
       <Route
        path="/explore/:mediaType"
        element={<Explore />}
        loader={({ params }) => fetchApi(`/discover/${params.mediaType}`)}
      />
      <Route
        path="/all/search"
        element={<SearchResults />}
        loader={({ request }) => searchQueryFunc(request)}
      /> 
     <Route path="/login" element={<LoginForm />} />
     <Route path="/user/rated" element={<Protected><Subscribed /></Protected>} />
     <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
