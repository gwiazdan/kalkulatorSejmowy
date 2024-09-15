import Party from './Party.jsx';
import {ConstituencyNames} from "./ConstituencyNames.jsx";

// eslint-disable-next-line react/prop-types
function Constituency({selectedConstituency, constituenciesResults, seatsResults}) {

        // eslint-disable-next-line react-hooks/rules-of-hooks,react/prop-types



        if(!selectedConstituency){
            return <div id="PanelOkregu" className="p-10 text-center font-bold">Wybierz okrąg!</div>;
        } else {
            const percentResults = constituenciesResults[selectedConstituency-1];
            //console.log(seatsResults);
            const seats = seatsResults[selectedConstituency-1];
            //console.log(seats);
            return (
                <>
                    <div id="PanelOkregu" className="grid grid-rows-8 grid-cols-3 p-2 gap-y-1 gap-x-4 text-center h-full">
                        <div className="h-2 font-bold col-span-3">Okręg nr {selectedConstituency}. {ConstituencyNames.get(parseInt(selectedConstituency))}</div>
                        <div className="font-semibold">Nazwa Partii</div>
                        <div className="font-semibold">Poparcie [%]</div>
                        <div className="font-semibold">Liczba mandatów</div>
                        {/* eslint-disable-next-line react/prop-types */}
                        <Party partyName="Prawo i Sprawiedliwość" partyPopularity={percentResults['PiS']} partySeats={seats['PiS']}/>
                        {/* eslint-disable-next-line react/prop-types */}
                        <Party partyName="Koalicja Obywatelska" partyPopularity={percentResults['KO']} partySeats={seats['KO']}/>
                        {/* eslint-disable-next-line react/prop-types */}
                        <Party partyName="Konfederacja" partyPopularity={percentResults['Konfederacja']} partySeats={seats['Konfederacja']}/>
                        {/* eslint-disable-next-line react/prop-types */}
                        <Party partyName="Trzecia Droga" partyPopularity={percentResults['TD']} partySeats={seats['TD']}/>
                        {/* eslint-disable-next-line react/prop-types */}
                        <Party partyName="Lewica" partyPopularity={percentResults['Lewica']} partySeats={seats['Lewica']}/>
                        {/* eslint-disable-next-line react/prop-types */}
                    </div>

                </>
            )
        }

}

export default Constituency;