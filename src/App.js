import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Pricing from './Pages/Home'
import About from './Pages/About'
import Specification from './Pages/Specification'
import Membership from './Pages/Membership'
import Blog from './Pages/Blog'
import BlogPost1 from './Pages/Blogs/Blogpost1'
import BlogPost2 from './Pages/Blogs/Blogpost2'
import BlogPost3 from './Pages/Blogs/Blogpost3'
import RR from './Pages/Specification/RR'
import AD from './Pages/Specification/AD'
import CI from './Pages/Specification/CI'
import QAT from './Pages/Specification/QAT'
import M from './Pages/Specification/M'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import BlogPost4 from './Pages/Blogs/Blogpost4';
import BlogPost5 from './Pages/Blogs/Blogpost5';
import BlogPost6 from './Pages/Blogs/Blogpost6';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function App() {
  
  return (
  <Router>
    <Routes>
          <Route path="/" element={<Pricing />} />
          <Route path="/About" element={<About />} />
          <Route path="/specification" element={<Specification />} />
          <Route path="/Membership" element={<Membership />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Blog/sd-economy" element={<BlogPost1 />} />
          <Route path="/Blog/asd-economy" element={<BlogPost2 />} />
          <Route path="/Blog/covid-effect" element={<BlogPost3 />} />
          <Route path="/Blog/asd-impact" element={<BlogPost4 />} />
          <Route path="/Blog/tailored" element={<BlogPost5 />} />
          <Route path="/Blog/future" element={<BlogPost6 />} />
          <Route path="/specification/research-and-requirements" element={<RR />} />
          <Route path="/specification/architecture-and-design" element={<AD />} />
          <Route path="/specification/construction-and-implementation" element={<CI />} />
          <Route path="/specification/quality-assurance-and-testing" element={<QAT />} />
          <Route path="/specification/management" element={<M />} />
        </Routes>
    </Router>
  );
}

export default App;
