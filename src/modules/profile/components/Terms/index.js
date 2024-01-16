import React, { useState } from 'react'
import useGetTermsAndConditions from '../../controller/get_terms_conditions'
import { useLocation } from "react-router-dom";
import InputWithFullBoarder from '../../../../generalComponents/InputWithFullBoarder';
import CustomButton from '../../../../generalComponents/Button';
import CreateTermsAndCondtionsManager from '../../controller/create_terms_conditions';
import { UpdateTermsAndConditions } from '../../controller/update_terms_conditions';

const Terms = () => {
    const [activeTerms, setActiveTerms] = useState('general')
    const [termsAndConditions, setTermsAndConditions] = useState('')
    const location = useLocation();
    const isAdmin = location.pathname.includes("/admin");
    const { terms, isLoading } = useGetTermsAndConditions({ type: activeTerms })
    // //console.log('--->>.terms', terms)
    const { createTermsAndCondtionsController, isLoading: creating } = CreateTermsAndCondtionsManager({ initialType: activeTerms })
    const { updateTermsAndConditionsCaller, isLoading: updating } = UpdateTermsAndConditions({ initialType: activeTerms })

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
            <div class="py-3 bg-white">
                <div class="px-4 mx-auto  max-w-7xl">
                    <div class="w-full pb-1 overflow-x-auto">
                        <div class="border-b border-gray-200">
                            <nav class="flex -mb-px space-x-10 ">
                                <p class={`py-4 text-sm font-medium  transition-all duration-200 border-b-2 px-5 py-2 rounded-t-md cursor-pointer ${activeTerms === 'general' ? 'border-brandYellow text-brandYellw bg-brandYellow text-black' : 'text-gray-900 border-transparent hover:border-gray-300'} whitespace-nowrap`} onClick={() => {
                                    setActiveTerms('general')
                                }}> General </p>

                                <p class={`py-4 text-sm font-medium  transition-all duration-200 border-b-2 px-5 py-2 rounded-t-md cursor-pointer whitespace-nowrap  ${activeTerms === 'ambassador' ? 'border-brandYellow text-brandYellw bg-brandYellow text-black' : 'text-gray-900 border-transparent hover:border-gray-300'}`} onClick={() => {
                                    setActiveTerms('ambassador')
                                }}> Ambassador </p>

                                <p class={`py-4 text-sm font-medium  transition-all duration-200 border-b-2 px-5 py-2 rounded-t-md cursor-pointer whitespace-nowrap  ${activeTerms === 'enrollment' ? 'border-brandYellow text-brandYellw bg-brandYellow text-black' : 'text-gray-900 border-transparent hover:border-gray-300'}`} onClick={() => {
                                    setActiveTerms('enrollment')
                                }}> Enrollment </p>


                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <form onSubmit={handleTerms}>
                {activeTerms==='general' &&  <InputWithFullBoarder
                    isTextArea={true}
                    className={'h-[350px] border border-black p-2'}
                    defaultValue={terms?.content}
                    onChange={(e) => {
                        setTermsAndConditions(e.target.value)
                    }}
                />}
                 {activeTerms==='ambassador' &&  <InputWithFullBoarder
                    isTextArea={true}
                    className={'h-[350px] border border-black p-2'}
                    defaultValue={terms?.content}
                    onChange={(e) => {
                        setTermsAndConditions(e.target.value)
                    }}
                />}
                 {activeTerms==='enrollment' &&  <InputWithFullBoarder
                    isTextArea={true}
                    className={'h-[350px] border border-black p-2'}
                    defaultValue={terms?.content}
                    onChange={(e) => {
                        setTermsAndConditions(e.target.value)
                    }}
                />}
                
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