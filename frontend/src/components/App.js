import React from "react";
import { createRoot } from 'react-dom/client';
import Header from "./layout/Header";
import Dashboard from "./todo/dashboard";
import { Provider } from "react-redux";
import store from "../store";



const App = () => {
  return (
    <Provider store={store} >
      <div className="container">
        <Header />
        <Dashboard />
      </div>
    </Provider>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);
