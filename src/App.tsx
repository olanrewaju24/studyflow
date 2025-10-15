import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Popular from './components/Popular';
import KeyFeatures from "./components/KeyFeatures";
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Courses from './pages/Courses';
import Home from './pages/Home';
import AdminDashboard from "./pages/AdminDashboard";
import WebDevelopment from './courses/webdevelopment';
import DataScience from './courses/Datascience';
import CyberSecurity from './courses/Cybersecurity';
import CloudComputing from './courses/Cloudcomputing';
import AIMachineLearning from "./courses/Ai";
import Marketing from './courses/Marketing';
import Finance from './courses/Finance';
import HumanResources from './courses/HumanResources';
import Entrepreneurship from './courses/Entreprenuership';
import ProjectManagement from './courses/ProjectManagement';
import Nutrition from './courses/Nutrition';
import MentalHealth from './courses/Mentalhealth';
import Nursing from './courses/Nursing';
import PublicHealth from './courses/Publichealth';
import HtmlCssCourse from './courses/HtmlCssCourse';
import NodejsBackendCourse from './courses/NodejsBackendCourse';
import JavaScriptEssentials from './courses/JavaScriptEssentials';
import About from './pages/About';
import Instructorpage from './pages/Instructorpage';
import InstructorApplication from './pages/InstructorApplication';

function App() {
  return (
    
      <div className="min-h-screen flex flex-col">
        <Routes>
          
          <Route
            path="/"
            element={
              <>
                
                <Navbar />
                <Hero />
                <KeyFeatures />
                <Popular />
                <Testimonials />
                <Footer />
              </>
            }
          />

          <Route path="/home" element={< Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='/courses' element={<Courses/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/instructorpage' element={<Instructorpage/>}/>
          <Route path="/instructor-application" element={<InstructorApplication />} />

          <Route
            path="/courses/it-&-software/web-development"
            element={<WebDevelopment />}
          />
          <Route
            path="/courses/it-&-software/data-science"
            element={<DataScience />}
          />
          <Route
            path="/courses/it-&-software/cybersecurity"
            element={<CyberSecurity />}
          />
          <Route
            path="/courses/it-&-software/cloud-computing"
            element={<CloudComputing />}
          />
           <Route
             path="/courses/it-&-software/ai-&-machine-learning"
             element={<AIMachineLearning />} 
          />
          <Route 
          path="/courses/business/marketing"
           element={<Marketing/>} />
           <Route
            path="/courses/business/finance"
            element={<Finance/>} />
            <Route 
            path="/courses/business/human-resources"
             element={<HumanResources/>} />
          <Route 
            path="/courses/business/Entreprenuership"
             element={<Entrepreneurship/>} />
             <Route 
            path="/courses/business/project-management"
             element={<ProjectManagement/>} />
             <Route 
            path="/courses/health/nutrition"
             element={<Nutrition/>} />
             <Route 
            path="/courses/health/mental-health"
             element={<MentalHealth/>} />
             <Route 
            path="/courses/health/nursing"
             element={<Nursing/>} />
             <Route 
            path="/courses/health/Public-health"
             element={<PublicHealth/>} />

        <Route 
        path="/courses/javascript-essentials" 
        element={<JavaScriptEssentials />} />
        <Route 
        path="/courses/html-css-course"
         element={<HtmlCssCourse />} />
        <Route 
        path="/courses/nodejs-backend-course"
         element={<NodejsBackendCourse/>} />


<Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    
  );
}

export default App;
