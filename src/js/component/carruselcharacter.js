import React, { useContext } from "react"


import { Context } from "../store/appContext";
import "../../styles/carrusel.css";


export const Carrusel = (prop) => {
    const { store, actions } = useContext(Context);
    const array =prop.arr
    

    return (
        <div id="scrolltime" className="row flex-nowrap">
            {Array.from(array).map((element)=>(
                <div className="col">
            <div className="card" style={{ width: "18rem" }}>
                <img id="imgcard" src={element.thumbnail.path +"." + element.thumbnail.extension } className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{element.name}</h5>

                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
            </div>
            ))}

        </div>
    );
}
