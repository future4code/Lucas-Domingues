import {BrowserRouter , Route , Switch} from "react-router-dom"
import React from "react"
import { HomePage } from "./HomePage"

export const Router =()=>{
    return(
        <div>
            <BrowserRouter>
            <switch>
                <Route exact path={"/HomePage"}>
                </Route>
                <Route exact path={"/AdminHomePage"}>
                </Route>
                <Route exact path={"/ApplicationFormPage"}>
                </Route>
            </switch>
            
            
            
            </BrowserRouter>
        </div>
    )
}