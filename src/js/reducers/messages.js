const messages = (state = [], action) => {
  switch (action.type) {
    case 'SET_MESSAGES':
    return action.payload.data;
    case 'ADD_MESSAGE':
    const message = action.payload.data;
    if(state.length > 0 && message.user_id === state[state.length - 1].user_id) {
      const lastMessage = state[state.length -1];
      const allButLastMessage = _.initial(state);
      const newLastMessage = {
        ...lastMessage,
        messages: [...lastMessage.messages, message.body]
      };

      return [...allButLastMessage, newLastMessage];
    } else {
      const newFullMessage = {
        messages: [message.body],
        user_id: message.user_id,
        nickname: message.nickname,
        time: "now",
        avatar_url: message.avatar_url
      };

      return [...state, newFullMessage];
    }
    default:
    return state;
  }
}


export default messages;
