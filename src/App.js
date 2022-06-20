import RegisterAdmin from "./pages/RegisterAdmin";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from "./pages/Home";
import LoginAdmin from "./pages/LoginAdmin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/registerAdmin" element={<RegisterAdmin />} />
          <Route path="/loginAdmin" element={<LoginAdmin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
