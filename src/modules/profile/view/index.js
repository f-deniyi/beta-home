import React, { useState } from "react";
import BaseDashboardNavigation from "../../../generalComponents/BaseDashboardNavigation";
import AccountWrapper from "../components/wrapper";
import Profile from "../components/Profile";
import ChangePassword from "../components/Password";
import Terms from "../components/Terms"
import DeleteAccount from "../components/DeleteAccount";
import Logout from "../components/Logout";

const ProductsManagement = () => {
    const [title, setTitle] = useState('Profile')

    return (
        <BaseDashboardNavigation title={"Account"} hideSearch={false}>
            <AccountWrapper title={title} setTitle={setTitle} >
                {title === 'Profile' && <Profile />}
                {title === 'Change password' && <ChangePassword />}
                {title === 'Terms and Conditions' && <Terms />}
                {title === 'Delete Account' && <DeleteAccount />}
                {title==='Logout' && <Logout/>}


            </AccountWrapper>
        </BaseDashboardNavigation >
    );
};

export default ProductsManagement;
