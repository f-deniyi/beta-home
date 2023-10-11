import React from 'react'

import ReactApexChart from 'react-apexcharts'

const BarChart = ({ data }) => {
    const series = [{
        name: 'Package',
        data: [800, 430, 448, 870, 540, 580, 690, 1100, 1200, 1380, 1500, 2000]
    }]

    const options = {

        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '30%',
                endingShape: 'rounded',
                borderRadius: 1,
                // borderRadiusApplication: 'end',

            },


        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 0,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        yaxis: {
            show: false
        },
        fill: {
            opacity: 1
        },

        colors: ['#fff122']

    }


    return <ReactApexChart options={options} series={series} type="bar" height={'100%'} width={'100%'} />

}

export default BarChart