import React from 'react'
import Loader from '../../../generalComponents/Loader'
import UseVerifyPaymentQuery from '../controller/verify_transaction';


const PaymentVerification = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const trxRef = urlParams.get('trxref');
    const reference = urlParams.get('reference');

    const data = {
        tx_ref: trxRef,
        transaction_id: reference
    }

    UseVerifyPaymentQuery({
        enabled: Boolean(trxRef && reference),
        ...data
    })

    //console.log(trxRef, reference)
    return (
        <Loader />
    )
}

export default PaymentVerification