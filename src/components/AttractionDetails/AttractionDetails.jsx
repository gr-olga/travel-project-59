import {useNavigate, useParams} from "react-router-dom";
import "./AttractionDetails.css"
import axios from "axios";
import {useEffect, useState} from "react";

export default function AttractionDetails() {
    let navigate = useNavigate();
    const params = useParams();
    const [details, setDetails] = useState()

    console.log(params.id, "params");

    async function getDetails() {
        const res = await axios.get(
            `http://localhost:4000/places/details/${params.id}`
        );
        console.log("res", res);
        return res
    }

    useEffect(() => {
        getDetails().then(r => setDetails(r.data))
    }, [])

    return (
        <div className="details-box">
            {details &&
            <>
                <h2>{details.name}</h2>
                <div className="description-data">
                    <img className="description-pic"
                         src={details.image}/>
                    <div className="description-box">
                        <p>{details.description}</p>
                        <a className="details-link" href={details.link}>{details.link}</a>
                    </div>
                </div>
            </>
            }
            <button className="back-btn" onClick={() => navigate(-1)}>Go back</button>
        </div>
    )
}
