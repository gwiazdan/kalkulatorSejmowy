import {useState} from "react";


// eslint-disable-next-line react/prop-types
function PartyForm({initialValue, name, onChange}){
    const [popularity, setPopularity] = useState(initialValue);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setPopularity(newValue);
        onChange(newValue);
    };

    return(
        <>
            <div className="flex items-center">
                <label className="font-medium px-2 pb-2 w-1/2">{name}</label>
                <div className="relative flex flex-1 items-center mb-3 ">
                    <input type="number"
                           className="relative px-3 py-3 bg-transparent placeholder:text-slate-500 rounded transition duration-300 ease border border-slate-400 w-full pr-10"
                           placeholder="0.00" onChange={handleChange} value={popularity} min="0" max="100"/>
                    <span
                        className="absolute right-0 flex items-center px-3 text-blueGray-300 bg-transparent rounded text-base">%</span>
                </div>
            </div>
        </>
    )
}

export default PartyForm;