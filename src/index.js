import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import EmployeeList from './pages/EmployeeList';
import CreateEmployee from './pages/CreateEmployee';
import Login from './pages/Login'; 
import { Provider } from 'react-redux';
import store from './store/store';
import EmployeeDetails from './pages/EmployeeDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}> 
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/list" element={<EmployeeList/>}/>
      <Route path="/list/:id" element={<EmployeeDetails/>}/>
      <Route path="/list/:eid/edit" element={<CreateEmployee/>}/>
      <Route path="/create" element={<CreateEmployee/>}/>

    </Routes>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
