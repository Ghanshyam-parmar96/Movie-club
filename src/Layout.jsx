import React, { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
// import Header from "./components/header/Header";
const Header = lazy(() => import("./components/header/Header"));
import Loading from "./components/loading/Loading";

const Layout = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
