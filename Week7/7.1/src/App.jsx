import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Dashboard from "./Components/Dashboard";
const Landing = lazy(() => import("./Components/Landing"));

const Navbar = lazy(() => import("./Components/Navbar"));

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/dashboard"
              element={
                <Suspense fallback={"loading..."}>
                  <Dashboard />
                </Suspense>
              }
            />
            <Route
              path="/"
              element={
                <Suspense fallback={"loading..."}>
                  <Landing />
                </Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
