import Button from "../components/Button";
import InputField from "../components/InputField";
import InputSelect from "../components/InputSelect";
import { useNavigate, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import '../styles/emp.css';
import KVLogo from '../assets/kvLogo.png';
import List from '../assets/List.png';
import { useCreateEmployeeMutation, useGetEmployeeByIdQuery, useUpdateEmployeeMutation,useLazyGetEmployeeByIdQuery } from "../services/API";


const CreateEmployee = () => {

  const [employee, setEmployee] = useState({
    "name": "",
    "id": "",
    "joiningDate": "",
    "role": "",
    "experience": "",
    "status": "",
    "address_line1": "",
    "address_line2": "",
    "city": "",
    "pincode": ""
  });

  const onChange = (key, value) => {
    console.log(key, value)
    setEmployee(
      {
        ...employee,
        [key]: value
      }
    )
  }
  
  const {eid} =useParams();
  console.log(eid) 
  const [getDetails, { data, error, isLoading }] = useLazyGetEmployeeByIdQuery(eid);
  const [createEmployee] = useCreateEmployeeMutation();
  const [updateEmployee]= useUpdateEmployeeMutation();

  useEffect(()=>{
    if(eid)
      getDetails(eid);
  },[eid])

  const handleSubmit=()=>{
    if(eid)
      handleUpdate();
    else
      handleCreate();
  }

  const handleCreate = () => {
    console.log("create")
    createEmployee(
      {
        name: employee.name,
        joiningDate: employee.joiningDate,
        role: employee.role,
        status: employee.status,
        experience: employee.experience,
        address: {
          address_line1: employee.address_line1,
          address_line2: employee.address_line2,
          city: employee.city,
          pincode: employee.pincode
        }
      }
    ).unwrap();

    setEmployee(
      {
        "name": "",
        "joiningDate": "",
        "role": "",
        "experience": 0,
        "status": "",
        "address": {
          "address_line1": "",
          "address_line2": "",
          "city": "",
          "pincode": ""
        },
      }
    )
    }

  const handleUpdate = () => {
    console.log("update")
    const newEmp=(
      {       
        name: employee.name,
        joiningDate: employee.joiningDate,
        role: employee.role,
        status: employee.status,
        experience: employee.experience,
        address: {
          address_line1: employee.address_line1,
          address_line2: employee.address_line2,
          city: employee.city,
          pincode: employee.pincode
        }
      }
    )

      updateEmployee({id:eid,employee:{...newEmp}});
    }
    
  useEffect(() => {
    if(data) {
      setEmployee(
        {
          "name":data.data.name,
          "joiningDate":data.data.joiningDate,
          "role": data.data.role,
          "experience":data.data.experience,
          "status": data.data.status,
          "address": {
            "address_line1": data.data.address.address_line1,
            "address_line2": data.data.address.address_line2,
            "city": data.data.address.city,
            "pincode":data.data.address.pincode
          },
        }
      )
    }
  },[data])
  

  const navigate = useNavigate();

  return (
    <>
      <div>
        <header>
          <img src={KVLogo} alt="kvLogo" />
        </header>
      </div>
      <aside id="fixed">
        <nav id="emplist">
          <div id="circle">
            <img src={List} width="20" height="20" />
          </div>
          <div id="anctext">
            <p>Employee list</p>
          </div>
        </nav>
      </aside>
      <main id="create">
        <section id="topsec">
          <h1> Create Employee </h1>
        </section>
        <section id="botsec">

          <div className="full">
            <div className="divstyle">
              <div className="indiv">
                <InputField onChange={onChange} id="name" value={employee.name} field="name" label="Employee Name" placeholder="Employee Name" />
              </div>
              <div className="indiv">

                <InputField onChange={onChange} value={employee.id} field="id" id="eId" label="Employee ID" placeholder="Employee ID" />
              </div>
              <div className="indiv">

                <InputField onChange={onChange} value={employee.joiningDate} field="joiningDate" id="joiningDate" label="Joining Date" placeholder="DD/MM/YYYY" />
              </div>
            </div>
            <div className="divstyle">

              <InputSelect
                label="role"
                value={employee.role}
                id="InputSelect"
                options={[
                  { key: "Dev", label: "Developer" },
                  { key: "UX", label: "UX Designer" },
                  { key: "QA", label: "QA" },
                ]}
                onChange={(value) => { console.log(value);
                onChange("role", value) }} />

              <InputSelect
                value={employee.status}
                label="status"
                id="InputSelect"
                options={[
                  { key: "active", label: "active" },
                  { key: "inactive", label: "inactive" },
                  { key: "probation", label: "probation" }
                ]}
                onChange={(value) => {
                  onChange("status", value) }} />

              <div className="indiv">

                <InputField id="experience" value={employee.experience} onChange={(key, value) => onChange(key, Number(value))} field="experience" label="Experience" placeholder="Experience" />
              </div>
            </div>
            <div className="divstyle">
              <div className="indiv">
                <InputField field="address_line1" value={employee.address_line1} id="address1" onChange={onChange} label="Address_line1" placeholder="Address_line1" />
              </div>
              <div className="indiv">

                <InputField field="address_line2" value={employee.address_line2} id="address2" onChange={onChange} label="Address_line2" placeholder="Address_line2" />
              </div>
              <div className="indiv">

                <InputField onChange={onChange} id="city" value={employee.city} field="city" label="City" placeholder="City" />
              </div>
            </div>
            <div className="fourth">
              <div className="indiv">
                <InputField  onChange={(key, value) => onChange(key, Number(value))} id="pincode" value={employee.pincode} field="pincode" label="Pincode" placeholder="Pincode" />
              </div>
              <div className="indiv">
                <label id="upload"> Upload ID proof
                </label><br />
                <label id="choose"> Choose File
                  <label htmlFor="idproof" id="browse">Browse</label>
                  <input type="file" name="browse" id="idproof" /> <br />
                </label>
              </div>
            </div>
            <div className="divstyle">
              <div>
                <><Button id="butcreate" label="Create" handleClick={handleSubmit}> </Button><br /></>
    
              </div><div>
                <Button id="cancel" label="Cancel" handleClick={() => {
                  navigate('/');
                }} />
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  );
};

export default CreateEmployee
