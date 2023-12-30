import React, { useEffect, useState } from "react";
import ModalManagement from "../../../generalComponents/ModalManagement";
import CustomButton from "../../../generalComponents/Button";
import InputWithFullBoarder from "../../../generalComponents/InputWithFullBoarder";
import { close } from "../../../assets/icons";
import { CreateTicketMutation } from "../controller/create_ticket";
import SelectInput from "../../../generalComponents/SelectInput";

const CreateTicket = () => {
    const ticketOptions = [
        {
            name: 'Package',
            id: 'package'
        },
        {
            name: 'Service',
            id: 'service'
        },
        {
            name: 'Order',
            id: 'order'
        },
        {
            name: 'Dispute',
            id: 'dispute'
        }
    ]
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [email, setEmail] = useState('')
    const [ticketType, setTicketType] = useState('')

    const { isLoading, isSuccess, CreateTicketCaller } = CreateTicketMutation()


    const handleSupport = (e) => {
        e.preventDefault()
        const data = {
            email,
            title,
            description,
            "type": ticketType?.id,
            // "order": null
        }
        // //console.log(data)
        CreateTicketCaller(data)

    }

    return (
        <>
            <ModalManagement id={"create_ticket"} hideCancel={true}>
                <div className="flex items-center justify-between mb-6">
                    <p className="text-[18px] font-medium ">Create Ticket</p>
                    <div
                        onClick={() => document.getElementById("create_ticket").close()}
                        role="button"
                    >
                        <img src={close} alt="close-icon" className="h-[23px] w-[23px]" />
                    </div>
                </div>
                <form className='' onSubmit={handleSupport} >
                    <InputWithFullBoarder
                        required
                        label={'Email'}
                        placeholder={'Enter Email'}
                        className={'!bg-[#EDEDED] !py-4 !px-[24px]'}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                    <SelectInput
                        options={ticketOptions}
                        onChange={(e, opt) => {
                            setTicketType(e)
                        }}
                    />
                    <InputWithFullBoarder
                        required
                        label={'Subject'}
                        placeholder={'Enter Subject'}
                        className={'!bg-[#EDEDED] !py-4 !px-[24px]'}
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                    />
                    <InputWithFullBoarder
                        required
                        label={'Description'}
                        placeholder={'Enter Description'}
                        className={'!bg-[#EDEDED] !py-4 !px-[24px] !h-[180px] shadow'}
                        row='40'
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                        isTextArea={true}
                    />

                    <CustomButton
                        className={'bg-brandPrimary !rounded-md w-full mb-3'}
                        buttonText={'Submit'}
                        isLoading={isLoading}
                        type={'submit'}
                    />

                </form>
            </ModalManagement>
        </>
    );
};

export default CreateTicket;
