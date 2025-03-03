import { BrowserRouter,Routes,Route } from "react-router-dom";
import AdminPage from "./pages/admin/adminPage";
import HomePage from "./pages/home/homePage";
import Testing from "./components/testing";
import LoginPage from "./pages/login/loginPage";
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
    <Routes>
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