import * as React from 'react';

interface ChatProps {
  user_email?: string;
  user_name?: string;
}
declare global {
  interface Window {
    __be: any;
    BE_API: any;
  }
}

const initWidget = (chatUser: ChatProps): void => {
  window.__be = window.__be || {};
  window.__be.id = '5e3a8a8089474a00078246d9';

  window.BE_API = window.BE_API || {};
  window.BE_API.onChatWindowClose = () => {
    window.BE_API.resetSession();
  };

  window.BE_API.onLoad = () => {
    window.BE_API.setSessionAttributes(chatUser);
  };

  const be = document.createElement('script');
  be.type = 'text/javascript';
  be.async = true;
  be.src = `${document.location.protocol === 'https:' ? 'https://' : 'http://'}cdn.chatbot.com/widget/plugin.js`;
  const s = document.getElementsByTagName('script')[0];
  if (s && s.parentNode) {
    s.parentNode.insertBefore(be, s);
  }
};

export default class Chatbot extends React.Component {
  static getChatbotUser(): ChatProps {
    try {
      return {
        user_email: 'charleson.marokey@sapiens.com',
        user_name: 'Charleson Davis',
      };
    } catch (e) {
      return {};
    }
  }

  componentDidMount(): void {
    const chatUser = Chatbot.getChatbotUser();

    initWidget(chatUser);
  }

  render(): React.ReactElement {
    return <></>;
  }
}
