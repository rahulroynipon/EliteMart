import { BrowserRouter, Routes, Route } from "react-router";
import React, { Suspense, lazy, useEffect, useState } from "react";

import Layout from "./components/layout/Layout";
import AppLoading from "./components/global/AppLoading";

const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <>
      {isLoading && <AppLoading />}
      <BrowserRouter>
        <Suspense fallback={<AppLoading />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="product/:id" element={<Product />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
