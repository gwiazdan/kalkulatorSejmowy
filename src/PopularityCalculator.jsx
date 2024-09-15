import data from './dane/dane.json';

function PopularityCalculator(multipliers) {
    const resultArray = [];
    //console.log(data);
    data.forEach((item) => {
        let sum = 0;
        const resultItem = {};
        //console.log(`Processing object ${index}:`, item);
        Object.keys(item).forEach((key) => {

            let multiplier = null;

            switch (key) {
                case 'PiS':
                    multiplier = multipliers.PiS;
                    break;
                case 'KO':
                    multiplier = multipliers.KO;
                    break;
                case 'TD':
                    multiplier = multipliers.TD;
                    break;
                case 'Lewica':
                    multiplier = multipliers.Lewica;
                    break;
                case 'Konfederacja':
                    multiplier = multipliers.Konfederacja;
                    break;
                case 'BS':
                    multiplier = multipliers.BS;
                    break;
                default:
                    // eslint-disable-next-line no-unused-vars
                    multiplier = 1;  // Default multiplier (jeśli klucz nie pasuje)
            }
            const value = parseFloat(item[key]);
            if (isNaN(value)) {
                console.warn(`Value for ${key} is not a number:`, item[key]);
                return; // Przeskocz, jeśli wartość nie jest liczbą
            }
            resultItem[key] = Math.floor(value * multiplier * 100) /100;
            sum+=resultItem[key];

        });
        if(sum>100){
            const multiplier = 100 / sum;
            Object.keys(item).forEach((key) => {
                resultItem[key] = Math.floor(multiplier * resultItem[key]);
            })
        }
        resultArray.push(resultItem);
    })

    return resultArray;  // Możesz zwrócić ten wynik lub wyświetlić
}

export default PopularityCalculator;
