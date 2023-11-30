import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import AllRoutes from "./AllRoutes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Layout>
      <AllRoutes />
      <ToastContainer />
    </Layout>
  );
}

export default App;
