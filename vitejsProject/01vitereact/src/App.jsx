import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Table from "./CRUD/Read/Table";
import Create from "./CRUD/Create";
import Update from "./CRUD/Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
