import { BrowserRouter, Routes, Route } from "react-router";
import React, { Suspense, lazy, useEffect, useState } from "react";

import Layout from "./components/layout/Layout";
import AppLoading from "./components/global/AppLoading";
import PageLoading from "./components/global/PageLoading";
import ScrollToTop from "./components/global/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  if (isLoading) {
    return <AppLoading />;
  }

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="product/:id" element={<Product />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
