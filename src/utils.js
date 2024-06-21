export const truncateMessage = (message, length = 20) => {
    if (message.length > length) {
      return message.slice(0, length) + '...';
    }
    return message;
  };
  