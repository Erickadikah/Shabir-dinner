import React, { useEffect } from 'react';

const KommunicateChat = () => {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = {
        appId: '115d591cc261d5b808336b6a84cb51888',
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
      var h = document.getElementsByTagName('head')[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, []);

  // Function to launch the Kommunicate conversation
  const launchChat = () => {
    if (window.Kommunicate) {
      window.Kommunicate.launchConversation();
    }
  };

  return (
    <div>
      {/*<button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={launchChat}
      >
        Chat with us
  </button>*/}
    </div>
  );
};

export default KommunicateChat;


