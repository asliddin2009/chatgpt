import React, { useState, useContext } from "react"
import { Context } from "../context"

const Input = ({
  reply,
  setUser,
  setChatsArr,
  chatsArr,
  setUserArr,
  userArr,
}) => {
  const { defRu } = useContext(Context)
  const [gptValue, setGptValue] = useState("")
  const openai_api_key = "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"
  let [disabled, setDisabled] = useState(false)
  function user() {
    setUser(gptValue)
    async function fetchCompletions() {
      const model = 'text-davinci-002' || "text-davinci-003"
      const prompt = gptValue
      const completionsEndpoint =
        `https://api.openai.com/v1/engines/${model}/completions`
      const response = await fetch(completionsEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openai_api_key}`,
        },
        body: JSON.stringify({
          prompt: prompt,
          max_tokens: 1000,
          n: 1,
          stop: "sorry",
          temperature: 0.5,
        }),
      })
      const json = await response.json()

      reply(json.choices[0].text)
      const obj = {
        user: gptValue,
        bot: json.choices[0].text,
      }

      setChatsArr([...chatsArr, obj])
    }
    fetchCompletions()
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    setGptValue("")
    const userName = {
      user: gptValue,
    }
    setUserArr([...userArr, userName])
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      className="stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6"
    >
      <div className="relative flex h-full flex-1 md:flex-col shadow-[0_0_10px_rgba(0,0,0,0.10)]">
        <input
          id="message"
          rows="4"
          className="block h-[60px] p-4 w-full text-sm text-gray-700 bg-gray-50 rounded-lg  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-[14px]"
          placeholder={defRu.placeholder}
          value={gptValue}
          onChange={(e) => setGptValue(e.target.value)}
          onKeyDown={(e) => setGptValue(e.target.value)}
          style={{ background: "rgba(64, 65, 79, 1" }}
          disabled={disabled}
        />

        <button
          onClick={user}
          disabled={disabled}
          className="absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent"
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </form>
  )
}

export default Input
