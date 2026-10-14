import SearchPage from "./pages/SearchPage";
import DashboardPage from "./pages/DashboardPage";
import { Route, Routes } from "react-router";




function App() {
  return(
    <>

    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
    
    </>
  )
}

export default App;
