import React, { useContext } from "react"


import { Context } from "../store/appContext";
import { Carrusel } from "../component/carruselcharacter";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const characters = store.characters
	return (<div className="container "><Carrusel arr={characters}/></div>
	);
}
