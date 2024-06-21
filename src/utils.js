export const truncateMessage = (message, length = 22) => {
    if (message.length > length) {
      return message.slice(0, length) + '...';
    }
    return message;
  };
  