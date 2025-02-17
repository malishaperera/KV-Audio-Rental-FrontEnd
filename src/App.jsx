// import ProductCard from "./components/products";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import AdminPage from "./pages/admin/adminPage";
import HomePage from "./pages/home/homePage.Jsx";
import Testing from "./components/testing";
import LoginPage from "./pages/login/loginPage";
// import HomePage from "./pages/home/homePage";
import { Toaster } from 'react-hot-toast';
import RegisterPage from "./pages/register/register";



function App() {
  return (
    
    <BrowserRouter>
 
    <Toaster 
      position="top-right"
      toastOptions={{
      style: {
        width: '200px', 
        height: '50px', 
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
        
        }
      }} 
    />
    <Routes path="/*">
      <Route path="/testing" element={<Testing/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/admin/*" element={<AdminPage/>} />
      <Route path="/*" element={<HomePage/>} />

      
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;