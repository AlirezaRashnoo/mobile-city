import React from 'react';
// import { DataBoxProvider } from './Context/DataBoxContext';
import Header from './component/Header';
// import Home from './pages/Home';
import { Routes ,Route,useRoutes } from "react-router-dom";
// import SuportSite from './component/SuportSite';
import routes from './routes';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


function App() {
  let router = useRoutes(routes)
  return(
    <>
    {/* <DataBoxProvider> */}
      <Header />
      {router}
    {/* </DataBoxProvider> */}
    </>
  )

}

export default App

