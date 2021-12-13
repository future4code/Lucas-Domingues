import {BrowserRouter , Route , Switch} from "react-router-dom"
import React from "react"
import { HomePage } from "./HomePage"
import {AdminHomePage} from "./AdminHomePage"
import {ApplicationFormPage} from "./ApplicationFormPage"
import {TripDetailsPage} from "./TripDetailsPage"
import { LoginPage } from "./LoginPage"
import { ListTripsPage } from "./ListTripsPage";
import {CreateTripPage}   from "./CreateTripPage"
export const Router =()=>{
    return(
        <div>
            <BrowserRouter>
            <switch>
                <Route exact path={"/"}>
                <HomePage/>
                </Route>

                <Route exact path={"/AdminHomePage"}>
                    <AdminHomePage/>
                </Route> 

                <Route exact path={"/ApplicationFormPage"}>
                <ApplicationFormPage/>
                </Route>
                
                <Route exact path={"/TripDetailsPage"}>
                <TripDetailsPage/>
                </Route>

                <Route exact path={"/loginPage"}>
                <LoginPage/>
                </Route>

                <Route exact path={"/ListTripsPage" }>
                    <ListTripsPage/>                   
                </Route>

                <Route exact path={"/CreateTripPage"}>
                    <CreateTripPage/>
                </Route>
            </switch>       
            </BrowserRouter>
        </div>
    )
}