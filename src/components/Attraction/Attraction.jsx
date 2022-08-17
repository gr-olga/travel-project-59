import {useParams} from "react-router-dom";
import "./Attraction.css"

export default function Attraction() {
    const attract = [
        "https://i.pinimg.com/564x/ed/ec/80/edec80f9bdda13f40296d5cf79d2fec5.jpg",
        "https://i.pinimg.com/564x/07/72/81/077281d2aa08cd0a64e4f404bdbe3513.jpg",
        "https://i.pinimg.com/564x/f7/6d/6f/f76d6f245da5b43597ce00d79f20097d.jpg",
        "https://i.pinimg.com/564x/af/4e/ed/af4eedfc9baf7d997d870540bb15692d.jpg",
        "https://i.pinimg.com/564x/c5/6f/8f/c56f8ff46321136761a713cb5b920c25.jpg"
    ]
    const params = useParams();
    console.log(params);
    return (
        <div className="attract-box">
            <p>hi</p>
            <p>{params.city}</p>
            <div className="cards-grid">
                {attract.map((item, index) => {
                    return (
                        <>
                            <p> name of attraction</p>
                            <img className="card" src={item} key={index}/>
                        </>
                    )
                })}
            </div>
        </div>
    )
}