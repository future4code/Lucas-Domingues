import React from "react";
import { useHistory } from "react-router-dom";
export const ListTripsPage=()=>{
const history = useHistory ()
    const goback=()=>{
        history.push("/");
    }
  return (
        <div>
            <p>rota para pagina de ListTripsPage </p>
            <button onClick={goback}>Voltar</button>
            <button >increver-se</button>
        </div>
    )
}