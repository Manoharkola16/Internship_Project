   
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import Preview from '../Components/Preview/Preview';
import { createBrowserRouter } from 'react-router-dom';

let Routes= createBrowserRouter([
    // {
    //     path :"/register",
    //     element: <Register/>
    // },
    // {
    //     path :"/",
    //     element: <Login/>
    // },
    // {
    //     path :"/preview",
    //     element: <Preview/>
    // }
    {
    path :"/register",
    element: <Register/> 
   },
   {
    path :"/",
    element: <Login/>
   }      
    

])

export default Routes;