import React, { useState, useContext } from 'react'
import { Context } from '../context'

const Lang = () => {
  const { langHandler, lang } = useContext(Context)
  return (
    <div
      onClick={langHandler}
      className="lang top-[20px] right-[20px] text-white p-3 bg-slate-600 w-10 h-10 flex justify-center items-center absolute cursor-pointer rounded-md">
      {lang}
    </div>
  )
}

export default Lang