import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<AddBook />}></Route>
        <Route path="/edit/:id" element={<EditBook />}></Route>
      </Routes>
    </Router>
  )
}

export default App;