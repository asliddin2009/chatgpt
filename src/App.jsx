import { useState } from "react"
import Input from "./components/Input"
import Welcome from "./components/Welcome"
import chatImg from "./images/chatImg.png"
import userImg from "./images/user.webp"

function App() {
  // const history = [{user: ""}]
  const [reply, setReply] = useState("")
  const [user, setUser] = useState("")
  // const a = reply.split(`${1 || 2 || 3}`)
  console.log(reply);
  const titleClass =
    "gptchat__title mt-[100px] text-center text-white mb-[50px]"
  return (
    <div className="gptchat">
      {reply.length > 0 && (
        <div className="chat">
          <div
            style={{ padding: "20px" }}
            className="container flex gap-3 p-10 text-white min-h-[100px] flex items-start"
          >
            <img className="w-6 h-6 rounded-sm" src={userImg} alt="" />
            {user}
          </div>
          <div
            style={{ padding: "20px" }}
            className="flex gap-3 rounded-sm items-start p-10 text-white min-h-[100px] bg-[#444654]"
          >
            <div className="container flex gap-3">
              <img className="w-6 h-6 rounded-sm" src={chatImg} alt="" />
              {reply}
            </div>
          </div>
        </div>
      )}
      {reply.length === 0 && <h1 className={titleClass}>ChatGPT</h1>}
      <div className="container">
        {reply.length === 0 && <Welcome />}
        <Input reply={setReply} setUser={setUser} />
      </div>
    </div>
  )
}

export default App
