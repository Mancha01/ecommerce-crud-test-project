import React from "react";
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Create />} />
      <Route path="/read" element={<Read />} />
      <Route path="/update" element={<Update />} />
    </Routes>
  );
};

export default App;
