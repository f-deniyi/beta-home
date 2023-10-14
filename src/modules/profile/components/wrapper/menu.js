import { profile, password, terms, deleteAccount, logout } from "../../../../assets/icons"

const profileMenu = [
    {
        icon: profile,
        name: 'Profile',
        showInAdmin:true
    },
    {
        icon: password,
        name: 'Change password',
        showInAdmin:true
    },
    {
        icon: terms,
        name: 'Terms and Conditions',
        showInAdmin:true
    },
    {
        icon: deleteAccount,
        name: 'Delete Account',
        showInAdmin:false
    },
    {
        icon: logout,
        name: 'Logout',
        showInAdmin:true
    }
]
export default profileMenu