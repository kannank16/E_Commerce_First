import React from "react";
import "../../chats.css";

const UserChatComponent = () => {
  return (
    <>
      <input type="checkbox" name="" id="check" />
      <label htmlFor="check" className="cht-btn">
        <i className="bi bi-chat-dots comment"></i>
        <i className="bi bi-x-circle close"></i>
      </label>
      <div className="chat-wrapper">
        <div className="chat-header">
          <p className="h6">Let's chat online</p>
        </div>
      </div>
    </>
  );
};

export default UserChatComponent;
