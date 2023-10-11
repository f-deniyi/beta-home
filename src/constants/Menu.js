import {
    home,
    home_active,
    product,
    product_active,
    services,
    services_active,
    wallet,
    wallet_active,
    message,
    message_active,
    account,
    account_active,
    dashboard,
    users,
    vendor_active,
    promotion,
    referal,
    packageIcon,
    replayment,
    shop,
    dashboard_active

} from '../assets/icons'


export const vendorMenu = [
    {
        title: 'Home',
        path: '/dashboard',
        icon: home,
        activeIcon: home_active
    },
    {
        title: 'Products Management',
        path: '/products-management',
        icon: product,
        activeIcon: product_active
    },
    {
        title: 'Services Management',
        path: '/services-management',
        icon: services,
        activeIcon: services_active
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: message,
        activeIcon: message_active
    },
    {
        title: 'Wallet',
        path: '/wallet',
        icon: wallet,
        activeIcon: wallet_active
    },
    {
        title: 'Account',
        path: '/profile',
        icon: account,
        activeIcon: account_active
    },
]

export const adminMenu = [
    {
        title: 'Dashboard',
        path: '/admin/dashboard',
        icon: dashboard,
        activeIcon: dashboard_active
    },
    {
        title: 'Users Management',
        path: '/admin/users-management',
        icon: users,
        activeIcon: product_active
    },
    {
        title: 'Vendor Request Management',
        path: '/admin/products-management',
        icon: shop,
        activeIcon: vendor_active
    },
    {
        title: 'Shop Management',
        path: '/admin/services-management',
        icon: shop,
        activeIcon: services_active
    },
    {
        title: 'Products Management',
        path: '/admin/services-management',
        icon: product,
        activeIcon: services_active
    },
    {
        title: 'Refferal Management',
        path: '/admin/services-management',
        icon: referal,
        activeIcon: services_active
    },
    {
        title: 'Repayment Management',
        path: '/admin/services-management',
        icon: replayment,
        activeIcon: services_active
    },
    {
        title: 'Promotion Management',
        path: '/admin/services-management',
        icon: promotion,
        activeIcon: services_active
    },
    {
        title: 'Package Management',
        path: '/admin/services-management',
        icon: packageIcon,
        activeIcon: services_active
    },
    {
        title: 'Wallet',
        path: '/admin/wallet',
        icon: wallet,
        activeIcon: wallet_active
    },
    {
        title: 'Account',
        path: '/admin/profile',
        icon: account,
        activeIcon: account_active
    },
]