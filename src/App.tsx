import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { paths } from "./utils/properties";
import SignIn from "./pages/auth/SignIn";
import Register from "./pages/auth/Register";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={""} element={<SignIn />}></Route>
        <Route path={paths.LOG_IN} element={<SignIn />}></Route>
        <Route path={paths.REGISTER} element={<Register />}></Route>
        <Route path={paths.DASHBOARD} element={<Homepage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
