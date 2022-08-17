import "./PlacePage.css"
import {useEffect, useState} from "react";
import axios from "axios";

export default function PlacePage() {
    const cities = [
        {id: 0, name: "choose city"},
        {id: 1, name: "Rome"},
        {id: 2, name: "Amsterdam"},
        {id: 3, name: "London"},
        {id: 4, name: "Barcelona"},
    ]
    const [list, setList] = useState([])

    async function getList() {
        const res = await axios.get(
            "http://localhost:4000/places"
        );
        return res
        // setList(res.data)
    }

    useEffect(() => {
        getList().then((r) => setList(r.data))
        // setList(res.data);
    }, []);

    console.log("list", list);
    const [cityName, setCityName] = useState()
    const changeSorting = event => {
        console.log("new sort order:", event.target.value);
        setCityName(event.target.value);
    };
    const citiesSorted = cityName === '' ? list : list.filter((item) => item.name === cityName)
    console.log("citiesSorted", citiesSorted);

    return (
        <div className="home-place-box">
            <h2> Choose the city </h2>
            <section>
                <span className="custom-dropdown big">
                <select onChange={changeSorting}>
                    {cities.map((item, i) => {
                        return (
                            <option key={i} value={item.name}>{item.name}</option>
                        )
                    })}
                </select>
    </span>
            </section>
            <h3>{cityName}</h3>
            {citiesSorted.length > 0 ?
                <div className="city-box">
                    <span className="place-des">{citiesSorted[0].description}</span>
                    <a href={`./${cityName}`}> <img className="place-pic" src={citiesSorted[0].image} alt="pic"/></a>
                </div> : <p>"you can choose city"</p>
            }
        </div>
    )
}