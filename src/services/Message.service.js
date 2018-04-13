import ApiClient from "./ApiClient";

class MessageService {

  sendMessage = (message) => {
    return ApiClient.post('message', message);
  };

  getMessages = () => {

  };

  deleteMessage = (id) => {

  };
}

export default new MessageService();