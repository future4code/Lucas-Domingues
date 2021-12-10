import { BrowserRouter, Switch ,Route } from "react-router-dom";
import { Router } from "./pages/Router";
import { HomePage } from "./pages/HomePage";
import { AdminHomePage } from "./pages/AdminHomePage";
import { ApplicationFormPage } from "./pages/ApplicationFormPage";
import {TripDetailsPage} from "./pages/TripDetailsPage"
import { LoginPage } from "./pages/LoginPage";
import {ListTripsPage } from "./pages/ListTripsPage";
export default function App() {
  return <Router/>;
}