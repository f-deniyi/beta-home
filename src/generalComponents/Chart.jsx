import React from 'react'
import ReactApexChart from 'react-apexcharts'
import useGetAllUsersManager from '../modules/UsersManagament/controllers/get_all_users_controller';

const Chart = () => {
    const { users } = useGetAllUsersManager({ filter: "" });
    const monthlyUserCounts = Array.from({ length: 12 }).fill(0);

    users?.forEach(user => {
        const month = new Date(user?.createdAt).getMonth();
        monthlyUserCounts[month]++;
    });

    const series = users ?
        [{
            name: 'Registered Users',
            data: monthlyUserCounts

        }] : [{
            name: 'Registered Users',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

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
                min: 0,
                // max: 12
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