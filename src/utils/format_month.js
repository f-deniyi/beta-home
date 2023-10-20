import moment from 'moment';

export const formatMonth = (dateString) => {
    const currentDate = moment();
    const givenDate = moment(dateString);

    const diffInMonths = currentDate.diff(givenDate, 'months');
    return diffInMonths === 0 ? `1 month` : `${diffInMonths} months`;
};