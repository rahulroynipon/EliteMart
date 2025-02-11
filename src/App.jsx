import { BrowserRouter, Routes, Route } from "react-router";
import React, { Suspense, lazy } from "react";

import Layout from "./components/layout/Layout";

const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback="">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<Product />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
