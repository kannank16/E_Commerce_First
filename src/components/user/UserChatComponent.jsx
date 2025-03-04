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
        <div className="chat-form">
          <div className="chat-msg">
            {Array.from({ length: 20 }).map((_, id) =>
            <div key={id}>   
{/*reduce error use key*/}

<p>
              <b>you wrote :</b>hello ,this is a sample text
            </p>
            <p className="bg-primary rounded-pill p-3 ms-4 text-white">
              <b>support wrote:</b> how can i help you ?
            </p>
            </div>
            )}
            {/* <p>
              <b>you wrote :</b>hello ,this is a sample text
            </p>
            <p className="bg-primary rounded-pill p-3 ms-4 text-white">
              <b>support wrote:</b> how can i help you ?
            </p> */}
          </div>
          <textarea
            name=""
            id="ClientChatMsg"
            placeholder="your text message"
            className="form-control"
          ></textarea>
          <button type="button" className="btn btn-success btn-block">
            submit
          </button>
        </div>
      </div>
    </>
  );
};

export default UserChatComponent;
