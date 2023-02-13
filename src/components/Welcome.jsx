import React, { useContext } from "react"
import { Context } from "../context"
import WelomeItem from "./WelomeItem"
import icon1 from "../images/1.svg"
import icon2 from "../images/2.svg"
import icon3 from "../images/3.svg"
import Input from "./Input"

const Welcome = (props) => {
  const { defRu } = useContext(Context)
  return (
    <div className="welcome flex gap-[10px] flex-wrap justify-center">
      <WelomeItem
        icon={icon1}
        text1={defRu.col1.text1}
        text2={defRu.col1.text2}
        text3={defRu.col1.text3}
        title={defRu.col1.title}
      />
      <WelomeItem
        icon={icon2}
        text1={defRu.col2.text1}
        text2={defRu.col2.text2}
        text3={defRu.col2.text3}
        title={defRu.col2.title}
      />
      <WelomeItem
        icon={icon3}
        text1={defRu.col3.text1}
        text2={defRu.col3.text2}
        text3={defRu.col3.text3}
        title={defRu.col3.title}
      />
    </div>
  )
}

export default Welcome
