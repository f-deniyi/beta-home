import React from 'react'
import moment from 'moment'

import formatRelativeTime from '../../../../utils/format_time';

const Message = ({ chat, userId, setChannel }) => {
    return (
        <div className='flex  gap-x-[11px] items-center mb-[11px] mt-[13px] cursor-pointer' onClick={() => {
            setChannel(chat)
        }}>
            <div className='flex-shrink-0'>
                <img src={
                    chat?.initiator?.user_id !== userId ?
                        (
                            chat?.initiator?.profile_picture.length > 0 ? chat?.initiator?.profile_picture : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                        ) : (
                            chat?.receiver?.profile_picture.length > 0 ? chat?.receiver?.profile_picture : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')}

                    className='h-[60px] w-[60px] rounded-full object-cover'
                />

            </div>
            <div className='w-full'>
                <div className='flex items-center justify-between mb-1'>
                    <h3 className='text-black text-[15px] font-semibold'>{chat?.initiator?.user_id !== userId ? chat?.initiator?.full_name : chat?.receiver?.full_name}</h3>
                    <p className='text-[#a5a5a5] text-[10px] font-normal'>{formatRelativeTime(chat?.updatedAt)}</p>
                </div>
                {/* <div className='flex items-center justify-between'>
                    <p className='text-black text-[10px] font-noraml'>Lorem ipsum dolor sit amet, consectetur.</p>
                    <p className='text-black flex items-center justify-center text-[10px] font-normal bg-brandPrimary rounded-full h-[20px] w-[20px] font-semibold'>3</p>
                </div> */}
            </div>
        </div>
    )
}

export default Message