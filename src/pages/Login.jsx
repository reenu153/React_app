import Button from "../components/Button"
import { useNavigate } from 'react-router-dom'
import InputField from "../components/InputField";
import { useEffect, useState } from "react";
import login from '../assets/login.png';
import KVLogo from '../assets/kvLogo.png';
import { useLoginMutation } from "../services/API";
import { setStorage } from "../services/utils";
import '../styles/emp.css'
import '../styles/login.css'

const Login = () => {
    const navigate = useNavigate();
    const [Login] = useLoginMutation();

    const [loginInfo, setLogin] = useState({
        "username": "",
        "password": "",
    });

    const onChange = (key, value) => {
        console.log(key, value)
        setLogin(
            {
                ...loginInfo,
                [key]: value
            }
        )
    }
    useEffect(() => {
        setLogin(
            {
                username: "",
                password: ""

            })
    }, []
    )



    const handleLogin = async () => {
        const newLogin =
        {
            username: loginInfo.username,
            password: loginInfo.password

        }

        const response = await Login(newLogin);
        console.log(response)
        const token = response.data.data.idToken;
        console.log(token)
        setStorage("idToken", token);
        navigate('/list');
    }


    return (
        <div className="page">

            <section >
                <img id="left" src={login} />
            </section>

            <div className="right">
                <img id="logo" src={KVLogo} width="220" height="45"/>

                <InputField class="InputField"
                    field="username"
                    name="username"
                    onChange={onChange}
                    placeholder="username" />

                <InputField class="InputField"
                    field="password"
                    name="password"
                    onChange={onChange}
                    placeholder="Password" />
                <Button id="LOG" label="LOGIN" handleClick={() => { handleLogin() }} />
            </div>
        </div>
    )
}
export default Login