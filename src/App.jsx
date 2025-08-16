
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import "./component/header.css"
import "./component/breakfast.css"
import "./component/lunch.css"
import "./component/dinner.css"

import Food from './component/Food'
import Maincomponent from './component/Maincomponent'
import Breakfast from './component/Breakfast'
import Lunch from './component/Lunch'
import Dinner from './component/Dinner'
import Signup from './component/Signup'


function App() {
 const router=createBrowserRouter([
    {
      path:"/",
      element:<Maincomponent/>,
      children:[
         {
       path:"/",
      element:<Food/>
    }, {
       path:"/break",
      element:<Breakfast/>
    },
    {
       path:"/lunch",
      element:<Lunch/>
    },{
       path:"/dinner",
      element:<Dinner/>
    },
    


      ]},
   
    {
       path:"/sign",
      element:<Signup/>  // yeh alag route hai,isme Maincomponent nahi chalega, Header/Footer automatically nahi aayega.
    }

  ]


  )
  

  return   <RouterProvider router={router} />
}

export default App
