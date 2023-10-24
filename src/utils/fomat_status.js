export const formatStatus = (status) => {
    let color;
    switch (status) {
        case 'pending':
            color = '#FFA800';
            break;
        case 'requested':
            color = '#FFA800';
            break;
        case 'accepted':
            color = '#06E401';
            break;
        case 'confirmed':
            color = 'green';
            break;
        case 'rejected':
            color = '#f00';
            break;
        case 'cancelled':
            color = '#f00';
            break;
        case 'on-going':
            color = 'brown';
            break;
        default:
            color = '#000';
            break;
    }

    return color;
};