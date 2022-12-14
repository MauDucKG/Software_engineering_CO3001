import { useEffect, useRef, useState } from "react";
import * as React from "react";
import io from "socket.io-client";
import axios from "axios";

function Chat() {
  const [state, setState] = useState({ message: "", name: localStorage.getItem('user') });
  const [chat, setChat] = useState([]);

  const socketRef = useRef();
  useEffect(async () => {
    await axios.get("http://localhost:4000/msg").then(function (response) {
      // handle success
      console.log(response.data.msgs);
      setChat(response.data.msgs);
    });
  }, []);
  useEffect(() => {
    socketRef.current = io.connect("http://localhost:4000");
    // var data = getMsgs()
    socketRef.current.on("message", ({ name, message }) => {
      setChat([...chat, { user: name, msg: message }]);
    });
    return () => socketRef.current.disconnect();
  }, [chat]);

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    const { name, message } = state;
    socketRef.current.emit("message", { name, message });
    e.preventDefault();
    setState({ message: "", name });
  };

  const renderChat = () => {
    return chat.map(({ user, msg, channel }, index) => (
      <div key={index}>
        <p>
          {user} : <span>{msg}</span>
        </p>
      </div>
    ));
  };

  return (
    <>
      <h4 className="text-center mb-3">Message</h4>
      <div className="card p-2">
        <h5 className="text-center">Chat Log</h5>
        <div className="render-chat overflow-auto" style={{ height: 350 }} >
          {renderChat()}
        </div>
        <form onSubmit={onMessageSubmit}>
          <div className="name-field">
          </div>
          <div>
            <input
              name="message"
              onChange={(e) => onTextChange(e)}
              value={state.message}
              id="outlined-multiline-static"
              variant="outlined"
              label="Message"
              className="form-control mt-2"
            />
          </div>
        </form>
      </div>
    </>);
}

export default Chat;
