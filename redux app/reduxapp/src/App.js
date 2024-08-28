import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

let routerpaths = createBrowserRouter([
  {"path":"/Home","element":<Home/>},
  {"path":"/About","element":<About/>},
  {"path":"/Contact","element":<Contact/>}
])


function App() {
  return (
    <div>
      <Header/>
      <RouterProvider router ={routerpaths}/>
    </div>
  )
}

export default App;
