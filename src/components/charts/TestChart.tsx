import React, {useEffect, useRef, useState} from 'react';
import { createChart } from 'lightweight-charts';


function TestCharts() {
    const myRef = useRef<string|HTMLElement>(null);

    useEffect(() => {
        const options = {
            width:200,
            height:300,
            layout: {
                backgroundColor: '#000000',
                textColor: 'rgba(255, 255, 255, 0.9)',
            },
            grid: {
                vertLines: {
                    color: 'rgba(197, 203, 206, 0.5)',
                },
                horzLines: {
                    color: 'rgba(197, 203, 206, 0.5)',
                },
            },
            rightPriceScale: {
                borderColor: 'rgba(197, 203, 206, 0.8)',
            },
            timeScale: {
                borderColor: 'rgba(197, 203, 206, 0.8)',
            },
        }

        const chart = createChart(myRef.current, options);
        const lineSeries = chart.addLineSeries();
        lineSeries.setData([
            { time: '2019-04-11', value: 80.01 },
            { time: '2019-04-12', value: 96.63 },
            { time: '2019-04-13', value: 76.64 },
            { time: '2019-04-14', value: 81.89 },
            { time: '2019-04-15', value: 74.43 },
            { time: '2019-04-16', value: 80.01 },
            { time: '2019-04-17', value: 96.63 },
            { time: '2019-04-18', value: 76.64 },
            { time: '2019-04-19', value: 81.89 },
            { time: '2019-04-20', value: 74.43 },
        ]);
        const barSeries = chart.addBarSeries({
            thinBars: false,
        });

        // set the data
        barSeries.setData([
            { time: "2019-04-10", open: 141.77, high: 170.39, low: 120.25, close: 145.72 },
            { time: "2019-04-11", open: 145.72, high: 147.99, low: 100.11, close: 108.19 },
            { time: "2019-04-12", open: 145.72, high: 147.99, low: 100.11, close: 54.2 },
        ]);
    })

    return(
        <div ref={myRef as React.RefObject<HTMLDivElement>} id = 'chart'>
        </div>
    )
}

export default TestCharts;
