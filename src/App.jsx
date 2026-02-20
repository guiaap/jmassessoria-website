import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

export default function App() {
 
  return (

    <div className="min-h-screen max-w-[1800px] m-auto shadow-2xl font-nunito bg-(--primary-background)">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    
  );
  
}

 
