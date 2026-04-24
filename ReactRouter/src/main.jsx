import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider , createBrowserRouter, createRoutesFromElements,Route} from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './About/About.jsx'
import Home from './components/home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github , {GithubInfoLoader} from './components/github/Github.jsx'


// const router= createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children: [{
//       path:"",
//       element: <Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]

//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<user/>} />
      <Route 
      loader={GithubInfoLoader}
      path='github' 
      element={<Github/>}
       />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>, 
)
