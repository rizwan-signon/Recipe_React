import React, { Suspense } from "react";

import Detail from "./pages/Detail";
import Home from "./pages/Home";
const Content = React.lazy(() => import("./components/Content"));
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route
          index
          element={
            <Suspense
              fallback={<div className="text-center text-5xl">Loading...</div>}
            >
              <Content />
            </Suspense>
          }
        />
        <Route path="/details/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
};

export default App;
