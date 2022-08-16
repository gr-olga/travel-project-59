import {useParams} from "react-router-dom";
import "./AttractionDetails.css"

export default function AttractionDetails() {
    const params = useParams();
    return (
        <div className="details-box">
            <h2>{params.city.id}</h2>
            <img className="details-pic"
                 src={"https://i.pinimg.com/564x/f7/6d/6f/f76d6f245da5b43597ce00d79f20097d.jpg"}/>
            <div className="description-box">
                <p>Descriptionk`drgh `.jgb`.m `g`.gh.j WgWghadrgher</p>
                <a>Link</a>
            </div>
        </div>
    )
}
