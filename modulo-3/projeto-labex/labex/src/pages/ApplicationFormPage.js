import react from "react"
import { useHistory } from "react-router"
export  const ApplicationFormPage=()=>{
const history=useHistory ()
const gotoHomePage=()=>{
 history.push("/")
}

    return(
        <div>
            <p>Rota ApplicationFormPage </p>
            <buttom onClick={ gotoHomePage}>ir para Home</buttom>
            
        </div>
    )
}