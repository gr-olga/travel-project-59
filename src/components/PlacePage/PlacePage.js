import pic from "../../picture/488-4887502_plane-logos-travel-design-plane-logo-png-transparent.png"
import "./PlacePage.css"
import {useState} from "react";

export default function PlacePage() {
    const cities = [
        {id: 1, name: "Rome"},
        {id: 2, name: "Amsterdam"},
        {id: 3, name: "London"},
        {id: 4, name: "Amsterdam"},
    ]
    const [cityName, setCityName] = useState("")
    const changeSorting = event => {
        console.log("new sort order:", event.target.value);
        setCityName(event.target.value);
    };
    return (
        <div className="home-place-box">
            <section>
                <select onChange={changeSorting}>
                    {cities.length > 0
                    && cities.map((item, i) => {
                        return (
                            <option key={i} value={item.name}>{item.name}</option>
                        )
                    })}
                </select>
            </section>
            <h3>{cityName}</h3>
            <span>Description</span>
            <img src={pic}/>
        </div>
    )
}