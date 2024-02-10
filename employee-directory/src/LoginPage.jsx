import { CustomButton } from "./components/CustomButton";
import { TextField } from "./components/TextField";
import { useState } from "react";
import { TableHolder } from "./Table";

function LoginPage() {

   const loginValues = [
    {
 //manager, not HR
 username: "TaliaBotsford",
 password: "password"
    },
    {
        //manager, HR
        username: "FranzTremblay",
        password: "password"
    },
    {
        username: "LawsonCartwright",
        password: "password"
    }
]

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    return (
        <TableHolder classname="flex space-y-10">
            <h2 className="font-bold">Login</h2>
            <h4>Log in to your account by inputting your username and password</h4>

            <TextField placeholder="Username" getter={username} setter={setusername}></TextField>
            <TextField placeholder="Passsword" fieldType="password" getter={password} setter={setpassword}></TextField>
            <CustomButton buttonText="Login"></CustomButton>
        </TableHolder>
    )
}

export default LoginPage