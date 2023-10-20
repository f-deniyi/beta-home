import React, { useState } from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ColorAttribute from './Attributes/Color';
import SizeAttribute from './Attributes/Size';
import WeightAttribute from './Attributes/Weight';

const AddProductAttribute = (
    {
        weightArray,
        setWeightArray,
        sizeArray,
        setSizeArray,
        colorArray,
        setColorArray
    }
) => {

   
    return (
        <Timeline
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}
        >
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot
                        style={{ backgroundColor: '#FFF122' }}
                    />
                    <TimelineConnector style={{ width: '1px', margin: '0' }} />
                </TimelineSeparator>
                <TimelineContent >
                    <ColorAttribute
                        colorArray={colorArray}
                        setColorArray={setColorArray}
                    />
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot
                        style={{ backgroundColor: '#FFF122' }}
                    />
                    <TimelineConnector style={{ width: '1px', margin: '0' }} />
                </TimelineSeparator>
                <TimelineContent>
                    <SizeAttribute

                        sizeArray={sizeArray}
                        setSizeArray={setSizeArray}
                    />
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot
                        style={{ backgroundColor: '#FFF122' }}
                    />
                </TimelineSeparator>
                <TimelineContent>
                    <WeightAttribute
                        weightArray={weightArray}
                        setWeightArray={setWeightArray}
                    />
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}

export default AddProductAttribute