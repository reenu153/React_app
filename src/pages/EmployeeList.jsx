import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import React from "react";
import { useGetEmployeesQuery, useUpdateEmployeeMutation } from "../services/API";
import { useDeleteEmployeeMutation } from "../services/API";
import '../styles/emp.css';
import KVLogo from '../assets/kvLogo.png';
import List from '../assets/List.png'
import {FaPlus} from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import {MdOutlineDelete, MdOutlineEdit} from 'react-icons/md'
const EmployeeList = () => 
{
    const navigate= useNavigate();
    const [deleteEmployee]=useDeleteEmployeeMutation();
    const [updateEmployee]=useUpdateEmployeeMutation();

    const { data, error, isLoading } = useGetEmployeesQuery();

    const handleDelete=(e,id)=>{
        e.stopPropagation();
        deleteEmployee(id)
    }
    const handleEdit=(e,id)=>{
        e.stopPropagation();
        navigate(`/list/${id}/edit`);
    }

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
            </aside>
            <main id="create">
            <section id="topsec">
            <h1> Employee List </h1>
            <h4>
            <div id="filter">
            Filter By
            </div>
            <Button id="status" label="Status"/>
            <div id="createempbtn"> 
            <div id="pluscircle" htmlFor="btn1">
            <FaPlus id="plus" onClick={() => { 
                      navigate('/create')}} />
            </div>
            <label id="text"> Create Employee </label>
            </div>
            </h4>
            </section>
            <section id="botsec">
            <table>
            <tr id="head1">
                <th>Employee Name</th>
                <th>Employee Id</th>
                <th>Joining Date</th>
                <th>Role</th>
                <th>Status</th>
                <th>Experience</th>
                <th>Action</th> 
            </tr>
            {data.data.map(elem => (
                <tr id="rows" onClick={() => { 
                    navigate(`/list/${elem.id}`)}}>
                    <td>{elem.name}</td>
                    <td>{elem.id}  </td> 
                    <td>{elem.joiningDate}  </td>
                    <td>{elem.role}  </td>
                    <td className={elem.status}>{elem.status} </td> 
                    <td>{elem.experience}  </td>
                    <td> < MdOutlineDelete id="trash" onClick={(e) => { handleDelete(e,elem.id)}}
                      />
                        <MdOutlineEdit id="edit" onClick={(e) => { handleEdit(e,elem.id)
                      }}/>
                    </td>
                </tr>
            )
            )  
            }
            </table>
            </section>
            </main>
      </>
        
);
}
}

export default EmployeeList