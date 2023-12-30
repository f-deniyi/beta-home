import React, { useState, useRef } from 'react'
import { SendMessageManager } from '../../controller/send_message'
import formatRelativeTime from '../../../../utils/format_time';
import { IoIosArrowRoundBack } from "react-icons/io";


const Chat = ({ messages, channel, userId, setChannel }) => {

    // //console.log(messages, userId)
    const inputRef = useRef(null);
    const { sendMessageController } = SendMessageManager()
    const [text, setText] = useState('')

    const handleMessage = (e) => {
        inputRef.current.value = ''
        const data = {
            "channel_id": channel?._id,
            "type": "text",
            "message": text
        }
        sendMessageController(data)
    }
    return (
        <div className='flex flex-col justify-between  h-full'>
            <div>
                <div className='flex  gap-x-[11px] items-center mb-[11px]  bg-white rounded-[10px] p-[14px]'>
                    <div className='flex gap-x-3 items-center'>
                        <div className='md:hidden block' onClick={() => {
                            setChannel(null)
                        }}>
                            <IoIosArrowRoundBack size={30} />
                        </div>
                        <div className='flex-shrink-0'>
                            <img src={channel?.initiator?.user_id !== userId ?
                                (
                                    channel?.initiator?.profile_picture.length > 0 ? channel?.initiator?.profile_picture : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
                                ) : (
                                    channel?.receiver?.profile_picture.length > 0 ? channel?.receiver?.profile_picture : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png')}
                                className='h-[40px] w-[40px] rounded-full object-cover' />
                        </div>
                    </div>

                    <h3 className='text-black text-[15px] font-semibold'>{channel?.initiator?.user_id !== userId ? channel?.initiator?.full_name : channel?.receiver?.full_name}</h3>
                </div>
            </div>
            <div className='h-full overflow-scroll mt-[24px]'>

                <div className="flex flex-col-reverse">
                    {
                        messages?.map(el =>
                            <div className={`mb-2 ${el?.sender?.user_id === userId ?
                                'self-end text-right' :
                                ''
                                }`}>
                                <div key={el?._id} className={`p-2 rounded-lg mb-1  shadow-md ${el?.sender?.user_id === userId ?
                                    'bg-brandPrimary self-end' :
                                    'bg-white p-2 max-w-[230px]'
                                    }`}>
                                    {el?.message}
                                </div>
                                <p className='text-[10px] font-light  '>{formatRelativeTime(el?.createdAt)}</p>
                            </div>

                        )
                    }

                </div>
            </div>
            <div className="flex mt-auto flex-end w-full bg-white p-[11px] rounded-[10px]">
                <input id='message' type="text" className="flex-1 border p-2 mr-2 rounded-[50px] bg-[#f2f2f2] p-[15px] outline-none focus:outline-none" placeholder="Type your message..." ref={inputRef}
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                />
                <button className="bg-brandPrimary text-white p-2 rounded-[50px]" disabled={!text.length > 0} onClick={() => {
                    handleMessage()
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="45" viewBox="0 0 60 45" fill="none">
                        <rect width="60" height="45" rx="22.5" fill="#FFF112" />
                        <path d="M41.5261 22.1223L23.5936 13.106C22.6919 12.7053 21.6901 13.5067 22.0908 14.4083L24.5954 21.1205L36.0161 23.0239L24.5954 24.9274L22.0908 31.6396C21.7903 32.5412 22.6919 33.3426 23.5936 32.8417L41.5261 23.8254C42.2273 23.5249 42.2273 22.523 41.5261 22.1223Z" fill="black" />
                    </svg>
                </button>
            </div>

        </div>
    )
}

export default Chat