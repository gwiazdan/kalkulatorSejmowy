import {useState} from "react";
import PartyForm from "./PartyForm.jsx";
import PopularityCalculator from "./PopularityCalculator.jsx";
import CalculateMandates from "./DhodntCalculator.jsx";

// eslint-disable-next-line react/prop-types
function Form({onResults}){
    const [pisPopularity, setPisPopularity] = useState("35.38");
    const [koPopularity, setKoPopularity] = useState("30.7");
    const [tdPopularity, setTdPopularity] = useState("14.4");
    const [lewicaPopularity, setLewicaPopularity] = useState("8.61");
    const [konfederacjaPopularity, setKonfederacjaPopularity] = useState("7.16");


    const handleSubmit = () => {
        const multipliers = {
            'PiS': parseFloat(pisPopularity),
            'KO': parseFloat(koPopularity),
            'TD': parseFloat(tdPopularity),
            'Lewica': parseFloat(lewicaPopularity),
            'Konfederacja': parseFloat(konfederacjaPopularity),
        };
        if(parseFloat(pisPopularity)+parseFloat(konfederacjaPopularity)+parseFloat(koPopularity)+parseFloat(tdPopularity)+parseFloat(lewicaPopularity)<= 100){
            const results = PopularityCalculator(multipliers);
            const outOfSejm = [];
            for (let multipliersKey in multipliers) {
                if((multipliersKey == 'TD' && multipliers[multipliersKey] < 8)||multipliers[multipliersKey] < 5){
                    outOfSejm.push(multipliersKey);
                }
            }
            const seats = CalculateMandates(results, outOfSejm);
            onResults(results, seats);

        } else {
            alert('Wyniki podane w formularzu muszą się sumować do 100%.');
        }

    }


    return(
        <>
            <div className="place-content-center p-2 mb-3">
                <form className="gap-y-5">
                    <div data-slot="control" className="flex flex-col gap-y-4 ">
                        <PartyForm initialValue={pisPopularity} name={"Prawo i Sprawiedliwość"} onChange={(e)=>{setPisPopularity(e)}}/>
                        <PartyForm initialValue={koPopularity} name={"Koalicja Obywatelska"} onChange={(e)=>{setKoPopularity(e)}}/>
                        <PartyForm initialValue={tdPopularity} name={"Trzecia Droga"} onChange={(e)=>{setTdPopularity(e)}}/>
                        <PartyForm initialValue={lewicaPopularity} name={"Lewica"} onChange={(e)=>{setLewicaPopularity(e)}}/>
                        <PartyForm initialValue={konfederacjaPopularity} name={"Konfederacja"} onChange={(e)=>{setKonfederacjaPopularity(e)}}/>

                        <button type="button"
                            className="btn bg-teal-500 hover:bg-teal-300 text-stone-100 font-bold py-2 px-4 rounded col-span-2" onClick={handleSubmit}>Zatwierdź
                        </button>
                    </div>
                </form>

            </div>

        </>
    );
}


export default Form;