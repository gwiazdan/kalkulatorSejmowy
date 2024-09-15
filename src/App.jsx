import Logo from './svg/parliament.svg';
import './sejm/sejm.css';
import Map from './Map.jsx';
import Form from './Form.jsx';
import Constituency from './Constituency.jsx';
import wyniki from './dane/wyniki.json';
import {useState} from "react";
import mandaty from './dane/mandaty.json';
import Summary from "./Summary.jsx";


function App() {
    const [selectedConsituency, setSelectedConstiuency] = useState(null);
    const [results, setResults] = useState(wyniki);
    const [seats, setSeats] = useState(mandaty);

    const handleConstituencySelect = (constituency) => {
        setSelectedConstiuency(constituency);
    }

    return (
    <>
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                  <img src={Logo} className="h-8" alt="Logo Kalkulatora"/>
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kalkulator Wyborczy</span>
              </a>
          </div>
      </nav>
        <div className="grid grid-cols-2">
            <div className="flex flex-col h-full">
                <div className="flex items-center justify-center flex-1 bg-stone-100 py-4 form">
                    <Form onResults={(results, seats) => {
                        setResults(results);
                        setSeats(seats);
                    }}/>
                </div>
                <div className="flex items-center justify-center flex-1 bg-teal-500 constituency text-stone-100">
                    <Constituency selectedConstituency={selectedConsituency} constituenciesResults={results} seatsResults={seats}/>
                </div>
            </div>
            <div>
                <Map onConstituencySelect={handleConstituencySelect} constituenciesResults={results}/>
            </div>
        </div>
        <Summary mandates={seats}/>
        <footer className="bg-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center text-white p-4">
                <p>
                    © 2024 norbigigakoks. All rights reserved.
                </p>
            </div>

        </footer>
    </>
    )
}

export default App
