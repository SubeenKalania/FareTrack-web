import SearchPage from "./pages/SearchPage";
import DashboardPage from "./pages/DashboardPage";
import { Route, Routes, Navigate } from "react-router";
import { useState } from "react";


function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<SearchPage user={user} setUser={setUser} />}
        />
        <Route
          path="/dashboard"
          element={
            user ? (
              <DashboardPage user={user} setUser={setUser} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
