import react, { useEffect } from "react";
import axios from "axios"
export const TripDetailsPage =()=>{
  useEffect(()=>{
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:LukasDomingues/trip/:id")
    headers:{
      auth:""
    }
  })
  .then((response) => {
    console(Response.data)
  })
  .catch((error) => {
    console.log("deu erro:",error.response)
  })
},[])
  return <div>Pagina detalhes</div>
}
