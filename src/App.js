import "./App.css";
import Operation from "./component/Operation";
import Edit from "./component/Edit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Operation />}></Route>
          <Route path='/Edit/:id' element={<Edit/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
