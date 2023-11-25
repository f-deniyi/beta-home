import React from 'react'
import { useParams } from 'react-router-dom';
import useGetSupportDetailsQuery from './controller/get_support_details';
import useGetSupportMessageQuery from './controller/get_ticket_message';
import BaseDashboardNavigation from '../../generalComponents/BaseDashboardNavigation';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import formatRelativeTime from '../../utils/format_time';
import ReplyTicket from './component/TicketReply';
const SupportDetails = () => {
    const navigate = useNavigate()
    const params = useParams();
    const { ticketId } = params;

    const { support_details } = useGetSupportDetailsQuery({
        enabled: Boolean(ticketId),
        ticketId: ticketId
    })
    const { messages } = useGetSupportMessageQuery({
        enabled: Boolean(ticketId),
        ticketId: ticketId
    })
    console.log('support_messages', messages)

    return (
        <BaseDashboardNavigation title={'Support Management'}>
            <div className='mb-[10px]'>
                <div className='flex items-center justify-between mt-[10px]'>
                    <div className='flex items-center gap-x-[10px] cursor-pointer' onClick={() => {
                        navigate(-1)
                    }}>
                        <button className='bg-brandPrimary border rounded-[5px] border-black h-[29px] w-[29px] flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                <path d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM11 4.5C11.2761 4.5 11.5 4.27614 11.5 4C11.5 3.72386 11.2761 3.5 11 3.5V4.5ZM1 4.5H11V3.5H1V4.5Z" fill="black" />
                            </svg>
                        </button>
                        <p className='text-[#333] text-[12px] font-normal'>Back</p>
                    </div>
                    <button className='bg-brandPrimary border rounded-[50px] gap-x-[10px] border-black px-[20px] py-[15px] flex items-center justify-center' onClick={()=>{
                        document.getElementById("reply_ticket").showModal()
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
                            <path d="M17.7553 8.1066C16.3713 6.72125 14.4488 5.86117 12.3356 5.86188H3.74219L8.27609 1.8052C8.70176 1.42434 8.73809 0.770393 8.35707 0.344729C7.97605 -0.0812474 7.3223 -0.117263 6.89648 0.263557L0.344844 6.1252C0.33793 6.13129 0.333203 6.13934 0.326484 6.14539C0.295664 6.17438 0.268555 6.20668 0.241445 6.23969C0.22375 6.26059 0.204766 6.28047 0.189063 6.30301C0.163672 6.33871 0.143437 6.37809 0.122773 6.41719C0.110977 6.43973 0.0968359 6.46059 0.0867188 6.48352C0.0661719 6.53071 0.0520312 6.58051 0.0385547 6.63102C0.0339844 6.64856 0.0264453 6.66469 0.0226953 6.68254C0.00808594 6.75157 0 6.82293 0 6.89633C0 6.96977 0.00808594 7.04114 0.0227344 7.10981C0.0264844 7.12836 0.0345313 7.14551 0.0392578 7.16371C0.0526953 7.21321 0.0665234 7.2627 0.0867188 7.30887C0.0969922 7.33242 0.111328 7.35367 0.123398 7.37657C0.143945 7.41528 0.163984 7.45403 0.189063 7.48969C0.20457 7.51192 0.223438 7.53145 0.240742 7.55231C0.268203 7.58532 0.29582 7.61832 0.327148 7.64762C0.333711 7.65367 0.338281 7.66145 0.344844 7.66715L6.89645 13.5291C7.32227 13.9099 7.97605 13.8736 8.35703 13.4479C8.73805 13.0223 8.70172 12.3683 8.27605 11.9875V11.9872L3.74219 7.93082H12.3356C13.8841 7.93153 15.2762 8.55547 16.2922 9.56942C17.3061 10.5853 17.9304 11.9778 17.9311 13.5261C17.9311 14.0972 18.3941 14.5605 18.9655 14.5605C19.5366 14.5605 20 14.0972 20 13.5261C20.0004 11.4127 19.1406 9.49059 17.7553 8.1066Z" fill="black" />
                        </svg>
                        <span className='text-[12px] font-semibold'>Reply</span>
                    </button>

                </div>
            </div>
            <div className='bg-white p-[27px] rounded-[10px] '>
                <div className='flex items-center justify-between mb-[9px]'>
                    <p className='text-[12px] font-medium'>{support_details?.user?.fullname} <span className='font-normal'>{`${(support_details?.user?.email)}`}</span></p>
                    <p>{formatRelativeTime(support_details?.createdAt)}</p>
                </div>
                <div>
                    <h3 className='text-[20px] font-medium mb-[11px]' >{support_details?.title}</h3>
                    <p className='text-[12px] font-light'>{support_details?.description}</p>
                </div>


            </div>
            <ReplyTicket />
        </BaseDashboardNavigation>
    )
}

export default SupportDetails