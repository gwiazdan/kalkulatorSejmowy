import Parliament from "./Parliament.jsx";
import {useEffect, useState} from "react";
import BarChart from './BarChart.jsx';

// eslint-disable-next-line react/prop-types
function Summary({mandates}){
    const [seats, setSeats] = useState(mandates);

    useEffect(() => {
        // eslint-disable-next-line react/prop-types
        if (mandates && mandates.length > 0) {
            setSeats(sumSeats(mandates));
        }
    }, [mandates]);

    return(
        <div className="grid grid-cols-2">
            <div className="flex items-center bg-stone-200 p-8">
                <Parliament seats={seats}/>
            </div>
            <div className="h-full bg-sky-500 p-8 summary">
                <BarChart seats={seats}/>
            </div>
        </div>
    )
}
function sumSeats(seats){
    const totalSeats = {
        "TD": 0,
        "Lewica": 0,
        "PiS": 0,
        "Konfederacja": 0,
        "KO": 0
    };

    seats.forEach(seats => {
        Object.keys(totalSeats).forEach(party => {
            totalSeats[party] += seats[party] || 0; // Dodaje liczbę mandatów dla każdej partii
        });
    });

    return totalSeats;
}

export default Summary;