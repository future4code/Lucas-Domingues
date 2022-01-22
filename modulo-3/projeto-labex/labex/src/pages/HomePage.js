import react from "react"
import { useHistory } from "react-router"
export  const HomePage = ()=>{

const history=useHistory();
const gotoListTripsPage=()=>{

history.push("/ListTripsPage")
}
const gotoAdminHomePage=()=>{
  history.push("/AdminHomePage")
  }

  return (
    <div>
       <button onClick={gotoListTripsPage}>Ver lista de viagens</button>
      <button onClick={gotoAdminHomePage}> AreaAdmin</button>
    </div>
  )
}