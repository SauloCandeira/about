import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Projects  from './components/Projects/Projects'
import  ProjectDetails  from './pages/ProjectDetails/ProjectDetails'
import Home from './pages/Home/Home';

export function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/react-deploy/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>

  )
}
