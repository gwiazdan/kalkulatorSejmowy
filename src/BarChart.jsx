import React, { useRef, useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const BarChart = ({ seats }) => {
    const chartRef = useRef(null);
    const [chartWidth, setChartWidth] = useState('100%');

    useEffect(() => {
        console.log('Seats:', seats); // Sprawdź, czy seats są przekazywane
        const updateChartWidth = () => {
            if (chartRef.current) {
                const width = chartRef.current.offsetWidth;
                setChartWidth(width);
            }
        };

        // Update width on resize
        window.addEventListener('resize', updateChartWidth);

        // Initial width
        updateChartWidth();

        return () => window.removeEventListener('resize', updateChartWidth);
    }, [seats]); // Dodaj `seats` jako zależność

    const series = [{
        name: 'Lewica',
        data: [seats['Lewica'] || 0]
    }, {
        name: 'Koalicja Obywatelska',
        data: [seats['KO'] || 0]
    }, {
        name: 'Trzecia Droga',
        data: [seats['TD'] || 0]
    }, {
        name: 'Prawo i Sprawiedliwość',
        data: [seats['PiS'] || 0]
    }, {
        name: 'Konfederacja',
        data: [seats['Konfederacja'] || 0]
    }];

    const options = {
        chart: {
            type: 'bar',
            height: 200,
            stacked: true,
            stackType: '460'
        },
        responsive: [
            {
                breakpoint: 1000,
                options: {
                    chart: {
                        width: '100%',
                    },
                },
            },
        ],
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "K"
                }
            }
        },
        fill: {
            opacity: 1,
        },
        colors: ['#d44', '#fca43f', '#8bd32e', '#31469b', '#655'],
        xaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            labels: {
                show: false
            }
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            labels: {
                show: false
            }
        },
        grid: {
            show: false
        },
        annotations: {
            xaxis: [
                {
                    x: 230,
                    borderColor: '#FF0000',
                    borderWidth: 3
                },
            ],
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
            offsetX: 40,
            labels: {
                colors: '#f5f5f4',
                fontWeight: 600
            }
        }
    };

    return (
        <div id="chart-container" className="flex items-center" ref={chartRef} style={{ width: '100%', height: '400px' }}>
            <Chart options={options} series={series} type="bar" height={200} width={chartWidth} />
        </div>
    );
};

export default BarChart;
