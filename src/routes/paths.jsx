import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import { useContext } from "react";
import { context } from "../constexts/AuthContext";

const Paths = () => {

    const { logado } = useContext(context);

    return (  
    <>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login/>}/>

              <Route path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
     </>
    );
}
 
export default Paths;