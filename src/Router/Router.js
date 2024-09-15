// import React from 'react'
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
// import Home from '../Components/Home/Home'
// import About from '../Components/About/About'
// import Contact from '../Components/Contact/Contact'
// import Header from '../ShareModules/Header/Header'
// import Footer from '../ShareModules/Footer/Footer'
// import Blog from '../Components/Blog/Blog'
// import Login from '../Components/Login/Login'
// import Register from '../Components/Register/Register'
// import CreateMenu from '../Components/CreateMenu/CreateMenu'
// import ShowMenu from '../Components/ShowMenu/ShowMenu'
// import EditMenu from '../Components/EditMenu/EditMenu'
// export default function Rout() {

//   return (
//     <>
//     <Router>
//         <Header/>
//         <Routes>
//             <Route path='/' element={<Home/>}/>
//             <Route path='/about' element={<About/>}/>
//             <Route path='/blog' element={<Blog/>}/>
//             <Route path='/contact' element={<Contact/>}/>
//             <Route path='/register' element={<Register/>}/>
//             <Route path='/login' element={<Login/>}/>
//             <Route path='/createMenu' element={<CreateMenu/>}/>
//             <Route path='/showMenu' element={<ShowMenu/>}/>
//             <Route path={`/editMenu/:id`} element={<EditMenu/>}/>

//         </Routes>
//         <Footer/>
//     </Router>
//     </>
//   )
// }


import React from 'react'

import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom"
import Header from "../ShareModules/Header/Header"
import Footer from '../ShareModules/Footer/Footer'
import Home from '../Components/Home/Home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Register from "../Components/Register/Register"
import Login from "../Components/Login/Login"
import CreateMenu from '../Components/CreateMenu/CreateMenu'
import EditMenu from '../Components/EditMenu/EditMenu'
import ShowMenu from "../Components/ShowMenu/ShowMenu"
import About from "../Components/About/About"
import Contact from "../Components/Contact/Contact"
import Blog from "../Components/Blog/Blog"
import { Suspense } from 'react'
import AddtoCart from '../Components/AddtoCart/AddtoCart'

export default function Rout() {
 
 const publicRoute=[
   {
     path:"/login",
     component:<Login/>,
   },
   {
     path:"/register",
     component:<Register/>
   },
   {
     path:"/",
     component:<Home/>
   }
 ]
 const privateRoute=[
   {
     path:"/about",
     component:<About/>
   },
   {
     path:"/reservation",
     component:<Contact/>
   },
   {
     path:"/specialMenu",
     component:<Blog/>
   },
 
   {
     path:"/createMenu",
     component:<CreateMenu/>
   },
   {
     path:"/showMenu",
     component:<ShowMenu/>
   },
   {
     path:"/editMenu/:id",
     component:<EditMenu/>
   },
   {
     path:"/addToCart/:id",
     component:<AddtoCart/>
   },
   
 ]
 const PrivateRouteComponent = ({ children }) => {
   const token =
     localStorage.getItem("Token") || sessionStorage.getItem("Token");

   return token !== null && token !== undefined ? (
     children
   ) : (
     <Navigate to="/login" />
   );
 };

 return (
   <>
   <Suspense fallback={<h1>Loading</h1>}>
   <Router>
     <ToastContainer/>
       <Header/>
       <Routes>
       {publicRoute.map((route, index) => (
           <Route
             key={index + 1}
             exact
             path={route.path}
             element={route.component}
           />
         ))}
         {privateRoute.map((route, index) => (
           <Route
             key={index + 2}
             path={route.path}
             element={
               <PrivateRouteComponent>{route.component}</PrivateRouteComponent>
             }
           />
         ))}
       </Routes>
       <Footer/>
   </Router>
   </Suspense>
   </>
 )
}

 