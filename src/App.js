import "./App.css";
import Books from "./Pages/Books/Books";
import { Route, Routes } from "react-router-dom";
import Characters from "./Pages/Characters/Characters";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
import { Home } from "./Pages/Home/Home";

function App() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const handlePage = (value) => {
    setPage(page + value);
  };
  const handleLimit = (value) => {
    setLimit(Number(value));
  };
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/books"
            element={
              <Books
                page={page}
                limit={limit}
                handlePage={handlePage}
                handleLimit={handleLimit}
              />
            }
          ></Route>
          <Route
            path="/character"
            element={
              <Characters
                page={page}
                limit={limit}
                handlePage={handlePage}
                handleLimit={handleLimit}
              />
            }
          ></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
