import React from 'react'

import ReactApexChart from 'react-apexcharts'

const Chart = ({ data }) => {
    const series = data ?
        [{
            name: 'Registered Users',
            data: data,

        }] : [{
            name: 'Registered Users',
            data: [10, 120, 50, 70, 90, 100, 140, 30, 90, 60, 150, 200],

        }]

    const options = {

        chart: {
            type: 'line',
            height: 1,
            sparkline: {
                enabled: true
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title: {
                text: 'Month'
            }
        },
        yaxis: {
            title: {
                text: '',
                min:0,
                max:10000
            },

        },
        stroke: {
            curve: 'smooth',
            width: 1
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.9,
                opacityTo: 1,
                stops: [0, 95, 0],
                type: 'vertical',
                // gradientToColors: ['#1B1B1B', '#1B1B1B']
            }
        },

        dataLabels: {
            enabled: false
        },

        colors: ['#fff122', '#fff']

    }


    return <ReactApexChart options={options} series={series} type="area" width={'100%'} height={'100%'} />

}

export default Chart