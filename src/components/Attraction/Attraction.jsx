import {useParams} from "react-router-dom";
import "./Attraction.css"
import axios from "axios";
import {useEffect, useState} from "react";

export default function Attraction() {

    const [attr, setAttr] = useState()
    const params = useParams();

    console.log(params.city);

    async function getAttractions() {
        const res = await axios.get(
            `http://localhost:4000/places/${params.city}`
        );
        console.log("res", res);
        return res
        // setList(res.data)
    }

    useEffect(() => {
        getAttractions().then(r => setAttr(r.data.placeDetails))
    }, [])

    return (
        <div className="attract-box">
            <p>hi</p>
            <p>{params.city}</p>
            <div className="cards-grid">
                {attr && attr.map((item, index) => {
                    return (
                        <>
                            <a href={`/${params.city}/${item.id}`}> <img className="card" src={item.image} key={index}/></a>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

//postgres://vlrdsado:G8SPV8DC2irijhUTp095DPZcKes9QgOv@abul.db.elephantsql.com/vlrdsado