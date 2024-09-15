import * as d3 from 'd3';
import * as d3pc from 'd3-parliament-chart';
import {useEffect, useRef} from "react";

// eslint-disable-next-line react/prop-types
const Parliament = ({seats})=>{
    const chartRef = useRef(null);

    useEffect(() => {
        const svg = d3.select(chartRef.current);

        svg.append('g').call(
            d3pc.parliamentChart()
                .width(800)
                .aggregatedData([
                    // eslint-disable-next-line react/prop-types
                    { "seats": seats['Lewica'], "color": "#d44" },
                    // eslint-disable-next-line react/prop-types
                    { "seats": seats['KO'], "color": "#fca43f" },
                    // eslint-disable-next-line react/prop-types
                    { "seats": seats['TD'], "color": "#8bd32e" },
                    // eslint-disable-next-line react/prop-types
                    { "seats": seats['PiS'], "color": "#31469b" },
                    // eslint-disable-next-line react/prop-types
                    { "seats": seats['Konfederacja'], "color": "#655" },
                ]).sections(6).sectionGap(10).seatRadius(6).rowHeight(33));

        return () => {
            svg.selectAll("*").remove();
        };
    }, [seats]);

    return (
        <svg ref={chartRef} width="100%" viewBox="0 0 800 400"></svg>
    )
}

export default Parliament;