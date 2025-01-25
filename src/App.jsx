// import ProductCard from "./components/products";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import AdminPage from "./pages/admin/adminPage";
import HomePage from "./pages/home/homePage.Jsx";
// import HomePage from "./pages/home/homePage";



function App() {
  return (
    // <div>
    //   <AdminPage/>
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path="/admin/*" element={<AdminPage/>} />
      <Route path="/*" element={<HomePage/>} />
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;