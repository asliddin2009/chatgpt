import { Context } from "./context"
import { useState } from "react"
import Input from "./components/Input"
import Lang from "./components/Lang"
import Welcome from "./components/Welcome"
import chatImg from "./images/chatImg.png"
import userImg from "./images/user.webp"

function App() {
  const uz = {
    col1: {
      title: "Misollar",
      text1: "Kvant hisoblashni oddiy so'zlar bilan tushuntiring",
      text2:
        "10 yoshli bolaning tug'ilgan kuni uchun ijodiy g'oyalaringiz bormi?",
      text3: "Javascriptda HTTP so'rovini qanday qilishim mumkin?",
    },
    col2: {
      title: "Imkoniyatlar",
      text1: "Foydalanuvchi suhbatda avval aytganlarini eslab qoladi",
      text2: "Foydalanuvchiga keyingi tuzatishlar kiritish imkonini beradi",
      text3: "Nomaqbul so'rovlarni rad etishga o'rgatilgan",
    },
    col3: {
      title: "Cheklovlar",
      text1: "Vaqti-vaqti bilan noto'g'ri ma'lumotlar paydo bo'lishi mumkin",
      text2:
        "Vaqti-vaqti bilan zararli ko'rsatmalar yoki noto'g'ri kontent yaratishi mumkin",
      text3: "2021 yildan keyingi dunyo va voqealar haqida cheklangan bilim",
    },
    placeholder: "Masalan: Londonda ob-havo qanday?",
  }
  const [defRu, setDefRu] = useState({
    col1: {
      title: "Примеры",
      text1: "Объясните квантовые вычисления простыми словами",
      text2: "Есть креативные идеи для дня рождения 10-летнего ребенка?",
      text3: "Как мне сделать HTTP-запрос в Javascript? ",
    },
    col2: {
      title: "Возможности",
      text1: "Помнит, что пользователь сказал ранее в разговоре",
      text2: "Позволяет пользователю вносить последующие исправления",
      text3: "Научены отклонять неуместные запросы",
    },
    col3: {
      title: "Ограничения",
      text1: "Иногда может генерировать неверную информацию",
      text2:
        "Иногда может создавать вредные инструкции или предвзятый контент.",
      text3: "Ограниченное знание мира и событий после 2021 года",
    },
    placeholder: "Например: Какая погода в Лондоне?",
  })
  const ru = {
    col1: {
      title: "Примеры",
      text1: "Объясните квантовые вычисления простыми словами",
      text2: "Есть креативные идеи для дня рождения 10-летнего ребенка?",
      text3: "Как мне сделать HTTP-запрос в Javascript? ",
    },
    col2: {
      title: "Возможности",
      text1: "Помнит, что пользователь сказал ранее в разговоре",
      text2: "Позволяет пользователю вносить последующие исправления",
      text3: "Научены отклонять неуместные запросы",
    },
    col3: {
      title: "Ограничения",
      text1: "Иногда может генерировать неверную информацию",
      text2:
        "Иногда может создавать вредные инструкции или предвзятый контент.",
      text3: "Ограниченное знание мира и событий после 2021 года",
    },
    placeholder: "Например: Какая погода в Лондоне?",
  }
  const en = {
    col1: {
      title: "Examples",
      text1: "Explain quantum computing in simple terms",
      text2: "Got any creative ideas for a 10 year old’s birthday?",
      text3: "How do I make an HTTP request in Javascript?",
    },
    col2: {
      title: "Capabilities",
      text1: "Remembers what user said earlier in the conversation",
      text2: "Allows user to provide follow-up corrections",
      text3: "Trained to decline inappropriate requests",
    },
    col3: {
      title: "Limitations",
      text1: "May occasionally generate incorrect information",
      text2: "May occasionally produce harmful instructions or biased content",
      text3: "Limited knowledge of world and events after 2021",
    },
    placeholder: "For example: What is the weather like in London?",
  }

  let [lang, setLang] = useState("UZ")

  const langHandler = (e) => {
    if (lang === "UZ") {
      setDefRu(uz)
      setLang("EN")
    } else if (lang === "EN") {
      setDefRu(en)
      setLang("RU")
    } else if (lang === "RU") {
      setDefRu(ru)
      setLang("UZ")
    }
  }

  const [reply, setReply] = useState("")
  const [user, setUser] = useState("")
  const [chatsArr, setChatsArr] = useState([])

  // console.log("chatsObj: ", chatsArr)
  // console.log("reply: ", reply)
  // console.log("user :", user)

  return (
    <Context.Provider value={{ defRu, langHandler, lang }}>
      <div className="gptchat">
        <div className="container relative">
          <Lang />
        </div>
        {user.length > 0 &&
          chatsArr.map((item, index) => (
            <div key={index} className="chat">
              <div
                style={{ padding: "20px" }}
                className="container gap-3 p-10 text-white min-h-[100px] flex items-start"
              >
                <img className="w-6 h-6 rounded-sm" src={userImg} alt="" />
                <p style={{ maxWidth: "800px" }}>{item.user}</p>
              </div>
              <div className="bg-[#444658]">
                <div
                  style={{ padding: "20px" }}
                  className="container gap-3 p-10 text-white min-h-[100px] flex items-start bg-[#444658]"
                >
                  <img className="w-6 h-6 rounded-sm" src={chatImg} alt="" />
                  <p style={{ maxWidth: "800px" }}>{item.bot}</p>
                </div>
              </div>
            </div>
          ))}
        {user.length === 0 && (
          <h1 className="gptchat__title mt-[100px] text-center text-white mb-[50px]">
            ChatGPT
          </h1>
        )}
        <div className="container">
          {user.length === 0 && <Welcome />}
          <Input
            reply={setReply}
            setUser={setUser}
            chatsArr={chatsArr}
            setChatsArr={setChatsArr}
          />
        </div>
      </div>
    </Context.Provider>
  )
}

export default App
