import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/public/Home";

function PlaceholderPage({ title }) {
  return (
    <div className="placeholder-page">
      <h1>{title}</h1>
      <p>This page will be implemented in the next phase.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={<PlaceholderPage title="Login" />}
        />

        <Route
          path="/register"
          element={<PlaceholderPage title="Create Account" />}
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;