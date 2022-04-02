import Navigation from "./routes/navigation/Navigation.component";
import SignIn from "./routes/sign-in/Sign-In.component";
import Home from "./routes/home/Home.component";
import {Routes, Route} from "react-router-dom"



const Shop = () => {
  return <h1>I am the shop page</h1>
}

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
         <Route index element={<Home />}/>
         <Route path="shop" element={<Shop />}/>
         <Route path="sign-in" element={<SignIn />}/>
      </Route>
     
    </Routes>
  )
};

export default App;
