import {SeatsNumber} from "./SeatsNumber.jsx";

export default function CalculateMandates(results, outOfSejm) {
    const resultArray = [];
    results.forEach((item, index) => {
        //console.log(item);
        resultArray.push(calculateConstituency(index, item, outOfSejm));
    });
    return resultArray;
}

function calculateConstituency(id, constituencyResults, outOfSejm){
    const seats = SeatsNumber.get(id+1);
    const resultArray = [];
    for(let i = 0; i<seats; i++){
        const resultItem = {};
        Object.keys(constituencyResults).forEach((key) => {
            if(key != outOfSejm){
                resultItem[key] = parseFloat(constituencyResults[key] / (i+1));
            }
        })
        resultArray.push(resultItem);
    }
    const lowestValue = parseFloat(getLowestScore(resultArray, seats));
    let assignedSeats = 0;
    const allocatedSeats = {};
    Object.keys(constituencyResults).forEach((key) => {
        if (key !== outOfSejm) {
            allocatedSeats[key] = 0;
        }
    });
    resultArray.forEach((item) => {
        Object.keys(item).forEach((key) => {
            //console.log(item[key], item[key]>lowestValue, lowestValue);
            if(item[key] > lowestValue && assignedSeats < seats){
                allocatedSeats[key]+=1;
                //console.log(allocatedSeats[key]);
                assignedSeats++;
            }
        })
    })
    return allocatedSeats;
}

function getLowestScore(array, seats){
    const flattenedArray = array.flatMap(item => Object.values(item));

    if(seats > flattenedArray.length){
        throw new Error("Błąd! Tablica krótsza od liczby mandatów do objęcia!");
    }

    const sortedArray = flattenedArray.sort((a,b) => b-a);
    return parseFloat(sortedArray[seats]);
}