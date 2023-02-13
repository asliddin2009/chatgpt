import React, { useState } from "react"

const Input = ({ reply, setUser }) => {
  const [gptValue, setGptValue] = useState("")
  const openai_api_key = "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"
  async function fetchCompletions() {
    const prompt = gptValue
    const completionsEndpoint = "https://api.openai.com/v1/engines/text-davinci-003/completions"
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
        stop: "",
        temperature: 0.5,
      }),
    })
    const json = await response.json()
    reply(json.choices[0].text)
    setUser(gptValue)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    setGptValue("")
  }

  // async function fetchModels() {
  //   // const prompt = "most popular names in USA"
  //   const completionsEndpoint = "https://api.openai.com/v1/models"
  //   const response = await fetch(completionsEndpoint, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${openai_api_key}`,
  //     },
  //   })

  //   const json = await response.json()
  //   // const completions = json.choices[0].text
  //   json.data.map((model) => {
  //     // model.root == "babbage"
  //     console.log(model.owned_by);
  //     console.log(model.root);
  //     console.log(model);
  //   })
  //   // console.log(json.data)
  //   // console.log(models);
  // }
  // fetchModels()

  return (
    <form
      onSubmit={onSubmitHandler}
      className="stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6"
    >
      <div className="relative flex h-full flex-1 md:flex-col">
        <input
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="javascript array methods "
          value={gptValue}
          onChange={(e) => setGptValue(e.target.value)}
          onKeyDown={(e) => setGptValue(e.target.value)}
        />

        <button
          onClick={fetchCompletions}
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
