import React, { useContext, useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  function handleSideBar() {
    setExtended(!extended);
  }

  const loadPrompt = async (prompt) => {
    console.log(prompt);

    setRecentPrompt(prompt);
    await onSent(prompt);
    //   response = await runChat(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img src={assets.menu_icon} alt="menu" onClick={handleSideBar} />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>

            <div className="entries">
              {prevPrompts.map((item, index) => {
                return (
                  <div
                    onClick={() => loadPrompt(item)}
                    className="recent-entry"
                  >
                    <img src={assets.message_icon} />
                    <p>{item.slice(0, 18)}...</p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
