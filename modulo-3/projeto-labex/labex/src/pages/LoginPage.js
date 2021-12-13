import axios from "axios";
import react, { useState } from "react";
import { useHistory } from "react-router-dom";
export const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
      
    const history = useHistory()


    const onChangePassoword = (event) => {
        setPassword(event.target.value)
    }
    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onSubmitLogin = () => {
        console.log(email, password)
        const body = {
               email:email,
               password:password,
        };

        axios
        .post(
           " https://us-central1-labenu-apis.cloudfunctions.net/labeX/:LukasDomingues/login",body
        ).then((response)=>{
            console.log("Deu certo:",response.data.token)
            localStorage.setItem("token",response.data.token)
            history.push("/")

        }).catch((error)=>{
            console.log("deu errado:" , error.response)
        })
    }
    return (
        <div>
            <p>rota para pagina de login </p>
            <input
                placeholder="Email"
                type={"email"}
                value={email}
                onChange={onChangeEmail} />

            <input
                placeholder="Password"
                type={"Password"}
                value={password}
                onChange={onChangePassoword} />
            <button onClick={onSubmitLogin}>Enviar</button>
        </div>
    )
}