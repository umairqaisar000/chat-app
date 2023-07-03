// import { socket } from "../../utils/Socket";
import { useEffect, useState } from "react";
import io from "socket.io-client"
console.log(process.env.REACT_APP_BACKEND_URL);
const socket = io.connect(process.env.REACT_APP_BACKEND_URL);

const Message = () =>{
    const [message, setMessage] = useState("");
    const [messageRceived, setMessageRceived] = useState("");

    const sendMessage = () => {
        socket.emit("send_broadcast_message", { message })
    }

    useEffect(()=>{
        socket.on("receive_message", (data)=>{  
            console.log(data.message);
            setMessageRceived(data.message);
        })
    },[socket])

    return(
        <div className="container mt-5">
            <h2 className="text-md-start mb-3">Chat</h2>
            <div className="text-md-start">{messageRceived}</div>
            <hr/>
            <div className="row">
            <div className="col-6">
                <input className="form-control" placeholder="Add message" onChange={(event)=>{
                    setMessage(event.target.value)
                }}/>
            </div>
            <div className="col-6">
                <button className="btn btn-primary d-flex float-start" onClick={sendMessage}>Send Message</button>
            </div>
            </div>
        </div>
    )
}

export default Message;