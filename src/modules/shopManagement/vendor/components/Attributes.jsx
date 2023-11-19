import React from 'react'
import useGetShopsAttributesQuery from '../controller/get_shop_attribute.js'
import useGetUserDetailsManager from "../../../settings/controllers/get_UserDetails_controller";
import useGetShopsQuery from "../../../shopManagement/controllers/get_shops";
import EmptyContent from '../../../../generalComponents/EmptyContent.js';
import AddAttribute from './AddAttribute.jsx';
const Attributes = () => {
    const {
        data,
        isSuccess,
        isLoading: userLoading,
    } = useGetUserDetailsManager();

    const {
        data: userShop,
        isError,
        error,
        isLoading: fetchingShop,
    } = useGetShopsQuery({
        enabled: Boolean(data?.data?.user),
        owner_id: data?.data?.user?.id
    });


    const { attributes } = useGetShopsAttributesQuery({
        enabled: Boolean(userShop?.shops[0]?.id),
        shopId: userShop?.shops[0]?.id
    })

    // console.log(attributes)k

    return (
        <div>
            {
                attributes.length > 0 ? <p>Attributes</p> :
                    <div>
                        <EmptyContent content={'Your shop has no attribute'} className='w-[200px h-[200px] border border-black border-1 rounded-md' />
                        <div className='flex items-center justify-center'>
                            <button className='bg-brandPrimary py-3 px-4 mt-4 rounded-md'
                                onClick={() => document.getElementById("add_attribute").showModal()}
                            >
                                Create Attribute
                            </button>
                        </div>
                    </div>
            }

            <AddAttribute shopId={userShop?.shops[0]?.id} />

        </div >
    )
}

export default Attributes