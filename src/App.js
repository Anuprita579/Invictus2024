import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

export default function App() {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <div className="flex flex-1">
        <Sidebar />      
        <Outlet />
      </div>
      <Footer />
      
    </div>
  )
}