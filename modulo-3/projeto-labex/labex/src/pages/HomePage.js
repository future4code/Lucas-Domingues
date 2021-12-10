import react from "react"
import { useHistory } from "react-router"
export  const HomePage = ()=>{

const history=useHistory();

const gotoForm=()=>{
history.push("/ApplicationFormPage")
}
return(
    <div>
      <p> olá rota legal para home pages</p>
      <button onClick={gotoForm}>Ir para Fomulario</button>
    </div>
)
}