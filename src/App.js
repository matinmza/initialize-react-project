// package
import { BrowserRouter, Routes, Route } from "react-router-dom"; //  store redux
import StoreProvider from "store/StoreProvider";
// pages
import Dashboard from "pages/Dashboard";
import Login from "pages/Login";
import Register from "pages/Register";

import RootPages from "pages";
function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<RootPages />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
