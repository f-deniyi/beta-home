import React, { useState } from 'react'
import useGetTermsAndConditions from '../../controller/get_terms_conditions'
import { useLocation } from "react-router-dom";
import InputWithFullBoarder from '../../../../generalComponents/InputWithFullBoarder';
import CustomButton from '../../../../generalComponents/Button';
import CreateTermsAndCondtionsManager from '../../controller/create_terms_conditions';
import { UpdateTermsAndConditions } from '../../controller/update_terms_conditions';

const Terms = () => {
    const [termsAndConditions, setTermsAndConditions] = useState('')
    const location = useLocation();
    const isAdmin = location.pathname.includes("/admin");
    const { terms, isLoading } = useGetTermsAndConditions()
    // //console.log('--->>.terms', terms)
    const { createTermsAndCondtionsController, isLoading: creating } = CreateTermsAndCondtionsManager()
    const { updateTermsAndConditionsCaller, isLoading: updating } = UpdateTermsAndConditions()

    const handleTerms = (e) => {
        e.preventDefault()
        const data = {
            "content": termsAndConditions
        }
        const payload = {
            "content": termsAndConditions,
            id: terms?._id
        }
        terms ? updateTermsAndConditionsCaller(payload) : createTermsAndCondtionsController(data)
    }

    return (

        isAdmin ? <div className='bg-white p-3 rounded-[5px]'>
            <form onSubmit={handleTerms}>
                <InputWithFullBoarder
                    isTextArea={true}
                    className={'h-[350px] border border-black p-2'}
                    defaultValue={terms?.content}
                    onChange={(e) => {
                        setTermsAndConditions(e.target.value)
                    }}
                />
                <div className='flex flex-end items-end'>
                    <CustomButton
                        buttonText={terms ? 'Update' : 'Save'}
                        className={'py-3 !px-6 bg-brandPrimary ml-auto'}
                        isLoading={creating || updating}
                    />
                </div>
            </form>

        </div> :
            <p className='text-[12px] font-light mt-[10px]'>
                {terms?.content}
            </p>


    )
}

export default Terms