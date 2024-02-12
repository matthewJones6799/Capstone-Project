import { CustomButton } from "./components/CustomButton";
import { TextField } from "./components/TextField";
import { useState } from "react";
import { TableHolder } from "./Table";
import { useNavigate } from "react-router-dom";
import { fetchLoginData } from "./getData";
import "./css/loginPage.css"
import "./css/TextStyles.css"
import "./css/CustomComponentStyles.css"

export function LoginPage() {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setpassword] = useState("")

    const navigateToPage = async () => {
        let employeeInfo = await fetchLoginData(firstName, lastName)
        navigate(`/employees/${employeeInfo.id}`)
    }

    return (
        <div className="loginContainer">
            <h2 id="largeTitle">Login</h2>
            <h4>Log in to your account by inputting your username and password</h4>

            <TextField placeholder="First Name" getter={firstName} setter={setFirstName}></TextField>
            <TextField placeholder="Last Name" getter={lastName} setter={setLastName}></TextField>
            <TextField placeholder="Passsword" fieldType="password" getter={password} setter={setpassword}></TextField>
            <CustomButton buttonText="Login" onClick={navigateToPage}></CustomButton>
        </div>
    )
}
