import React from "react"
import WelomeItem from "./WelomeItem"
import icon1 from "../images/1.svg"
import icon2 from "../images/2.svg"
import icon3 from "../images/3.svg"
import Input from "./Input"

const Welcome = (props) => {
  return (
    <div className="welcome flex justify-between">
      <WelomeItem
        icon={icon1}
        text1="Kvant hisoblashni oddiy so'zlar bilan tushuntiring "
        text2="10 yoshli bolaning tug'ilgan kuni uchun ijodiy g'oyalaringiz bormi? "
        text3="Javascriptda HTTP so'rovini qanday qilishim mumkin? "
        title="Misollar"
      />
      <WelomeItem
        icon={icon2}
        text1="Foydalanuvchi suhbatda avval aytganlarini eslab qoladi"
        text2="Foydalanuvchiga keyingi tuzatishlar kiritish imkonini beradi"
        text3="Nomaqbul so'rovlarni rad etishga o'rgatilgan"
        title="Imkoniyatlar"
      />
      <WelomeItem
        icon={icon3}
        text1="Vaqti-vaqti bilan noto'g'ri ma'lumotlar paydo bo'lishi mumkin"
        text2="Vaqti-vaqti bilan zararli ko'rsatmalar yoki noto'g'ri kontent yaratishi mumkin"
        text3="2021 yildan keyingi dunyo va voqealar haqida cheklangan bilim"
        title="Cheklovlar"
      />
    </div>
  )
}

export default Welcome
