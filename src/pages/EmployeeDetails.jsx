import { useNavigate, useParams } from "react-router-dom"
import Button from "../components/Button"
import React from "react";
import { useGetEmployeeByIdQuery, useGetEmployeesQuery } from "../services/API";
import '../styles/emp.css';
import KVLogo from '../assets/kvLogo.png';
import List from '../assets/List.png'
import '../styles/details.css'

const EmployeeDetails = () => 
{
    const navigate= useNavigate();
    const {id} =useParams();
    const { data, error, isLoading } = useGetEmployeeByIdQuery(id);
    if(error)
    console.log("error")
    else if(isLoading)
        console.log("loading")
    else
    {
    console.log(data)
    return(
        <>
            <header>
            <img src={KVLogo} alt="kvLogo" />
            </header>
            <aside id="fixed">
            <nav id="emplist">
            <div id="circle">
            <img src={List}width="20" height="20"/> 
            </div>
            <div id="anctext">
            <p> Employee list</p>
            </div>
            </nav>
            <nav id="emplist2" handleClick={() => {
                  navigate('/')}} >
            <div id="anctext2">
            <p> LOGOUT </p>
            </div>
            </nav>
            </aside>
            <main id="create">
            <section id="topsec">
            <h1> Employee Details </h1>
            </section>
            <section id="botsec2">
                    <>
                    <div className="row">
                    <div className="col1">
                    <label id="toplabel">Employee Name</label>
                    <label> {data.data.name} </label>
                    </div>
                    <div id="idfield">
                    <label id="toplabel">Employee ID</label>
                    <label> {data.data.id} </label>
                    </div>
                    <div className="col1">
                    <label id="toplabel">Joining Date</label>
                    <label> {data.data.joiningDate} </label>   
                    </div>
                    <div className="col1">
                    <label id="toplabel">Role</label>
                    <label> {data.data.role} </label>    
                    </div>
                    <div className="col1">
                    <label id="toplabel">status</label>
                    <label> {data.data.status} </label>   
                    </div>
                    <div className="col1">
                    <label id="toplabel">Experience</label>
                    <label> {data.data.experience} </label>   
                    </div>
                    </div>
                    <div className="row">
                    <div className="col1">
                    <label id="toplabel">Address Line 1</label>
                    <label> {data.data.address.address_line1} </label>
                    </div>
                    <div className="col1">
                    <label id="toplabel">Address Line 2</label>
                    <label> {data.data.address.address_line2} </label>
                    </div>
                    <div className="col1">
                    <label id="toplabel" >City</label>
                    <label> {data.data.address.city} </label>   
                    </div>
                    <div className="col1">
                    <label id="toplabel">Pincode</label>
                    <label> {data.data.address.pincode} </label>    
                    </div>
                    </div>
                    </>
            </section>
            </main>
      </>
        
);
}
}

export default EmployeeDetails