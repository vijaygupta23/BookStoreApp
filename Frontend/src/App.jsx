import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;




// import React from 'react'
// import { Navbar } from './components/Navbar'
// import Banner from './components/Banner'
// import Footer from './components/Footer'
// import Freebook from './components/Freebook'
// import Home from './home/Home'
// import Course from './components/Course'
// import { Route, Routes } from 'react-router-dom'
// import Courses from './courses/Courses'
// import Signup from './components/Signup'
// import Contact from './components/Contact'

// const App = () => {
//   return (
//         <>
    
//       <Routes>
//       <Route path="/" element ={<Home/>}/>
//       <Route path="/course" element ={<Courses/>}/>
//       <Route path="/signup" element ={<Signup/>}/>
//       <Route path="/contact" element ={<Contact/>}/>
      
    
//       </Routes>
       
//         </>
//   )
// }

// export default App