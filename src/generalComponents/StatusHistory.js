import React from 'react'
import { Chrono } from "react-chrono";

const StatusHistory = ({ history, activeStatus }) => {
    // const items = [{
    //     title: "May 1940",

    // }];

    //console.log(history)
    const items = history?.map(el => {
        return (
            {
                title: el?.name
            })
    });

    return (
        <div className='w-full'>
            <Chrono
                items={items}
                mode='HORIZONTAL'
                // hideControls={true}
                mediaHeight={0}
                cardLess={true}
                theme={{
                    primary: "#121212",
                    secondary: "#FFF122"
                }}
            />
        </div>
    )
}

export default StatusHistory