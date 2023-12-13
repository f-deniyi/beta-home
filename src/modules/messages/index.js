import React, { useState } from 'react';
import BaseDashboardNavigation from '../../generalComponents/BaseDashboardNavigation';
import InputWithFullBoarder from '../../generalComponents/InputWithFullBoarder';
import MessagesList from './components/MessagesList';
import Chat from './components/Chat';
import useGetUserChannel from './controller/get_user_channel';
import useGetUserDetailsManager from '../settings/controllers/get_UserDetails_controller';
import useGetChannelMessage from './controller/get_channel_message';

const Messages = () => {
  const { data, isError, error, isLoading: fetching, isSuccess } = useGetUserDetailsManager();
  const [channel, setChannel] = useState(null)
  const userId = data?.data?.user?._id;
  const { isLoading, channels } = useGetUserChannel()


  const { channel_messages } = useGetChannelMessage({
    channelId: channel === null ? channels[0]?._id : channel?._id,
    enabled: channels?.length > 0
  })


  return (
    <BaseDashboardNavigation
      title={'Messages'}
    >
      <div className="flex w-full flex-grow bg-gray-100" style={{
        height: 'calc(100vh - 119px)'
      }}>
        {/* Left Side (Message List) */}
        <div className={`w-[100%] md:w-[30%] bg-white p-4 overflow-y-auto rounded-[10px] ${channel && 'hidden md:block'}`}>
          <div className='flex gap-x-[8px] w-full justify-between'>
            <div className='col-span-10 w-full'>
              <input
                className='w-full !p-[19px] !bg-[#f2f2f2] text-[12px] font-normal text-[#9a9a9a] bg-transparent outline-none focus:outline-none w-full placeholder:text-[12px] mr-4 rounded-[10px]'
                placeholder='Search Chat'
              />
            </div>
            <div className='col-span-2'>
              <button className='bg-brandPrimary w-[55px] h-[55px] flex items-center justify-center rounded-[10px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path d="M10.025 19.05C15.0094 19.05 19.05 15.0094 19.05 10.025C19.05 5.04063 15.0094 1 10.025 1C5.04063 1 1 5.04063 1 10.025C1 15.0094 5.04063 19.05 10.025 19.05Z" stroke="black" stroke-width="1.425" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M20 20.0001L18.1 18.1001" stroke="black" stroke-width="1.425" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>


          </div>
          <MessagesList
            channels={channels}
            userId={userId}
            setChannel={setChannel} />
        </div>

        {/* Right Side (Your Messages) */}
        <div className={`flex-1 w-100% md:w-[70%] px-0 md:px-4 overflow-y-auto relative ${channel === null && 'hidden md:block'}`}>

          <Chat
            setChannel={setChannel}
            messages={channel_messages}
            channel={channel === null ? channels[0] : channel}
            userId={userId}
          />
        </div>
      </div>
    </BaseDashboardNavigation>

  );
};

export default Messages;