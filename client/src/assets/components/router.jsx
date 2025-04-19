import { Routes, Route, HashRouter as Router } from "react-router";
import AddUser from "../pages/addUser";
export default function RouterFn() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<h1>Home Page</h1>}  />
          <Route path="/blogs" element={<h1>blogs Page</h1>} />
          <Route path="/contact" element={<h1>contact Page</h1>} />
          <Route path="/add.user" element={<AddUser />} />
          <Route path="*" element={<h1>404 Page</h1>} />
        
      </Routes>
    </Router>
  );
}
