import SearchPage from "./pages/SearchPage";
import DashboardPage from "./pages/DashboardPage";
import { Route, Routes } from "react-router";
import { useState } from "react";





function App() {

  const [user, setUser] = useState(null);
  return(
    <>

    <Routes>
      <Route user={user} setUser={setUser} path="/" element={<SearchPage />} />
      <Route user={user} setUser={setUser} path="/dashboard" element={
        user ? (<DashboardPage user={user} setUser={setUser} /> ) :(
          <Navigate to="/" />
        )
      } />
    </Routes>
    
    </>
  )
}

export default App;
