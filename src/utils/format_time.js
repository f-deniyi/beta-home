import moment from 'moment';

const formatRelativeTime = (timestamp) => {
    const messageTime = moment(timestamp);
    const currentTime = moment();
  
    const minutesDiff = currentTime.diff(messageTime, 'minutes');
    const hoursDiff = currentTime.diff(messageTime, 'hours');
    const daysDiff = currentTime.diff(messageTime, 'days');
  
    if (minutesDiff < 1) {
      return 'Just now';
    } else if (minutesDiff < 60) {
      return `${minutesDiff} ${minutesDiff === 1 ? 'minute' : 'minutes'} ago`;
    } else if (hoursDiff < 24) {
      return `${hoursDiff} ${hoursDiff === 1 ? 'hour' : 'hours'} ago`;
    } else if (daysDiff < 7) {
      return `${daysDiff} ${daysDiff === 1 ? 'day' : 'days'} ago`;
    } else {
      return messageTime.format('MMMM Do YYYY');
    }
  };

  export default formatRelativeTime;