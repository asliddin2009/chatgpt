const WelomeItem = ({ icon, title, text1, text2, text3 }) => {
  return (
    <div className="welcomeItem w-[300px]">
      <img className="h-7 w-7 welcom__icon text-white mx-auto mb-2" src={icon} alt="" />
      <h1 className="welcome__title mb-3 text-white text-base text-center"> { title } </h1>
      <div className="welcome__table mb-3 flex justify-center p-4 rounded-lg shadow-lg max-w-sm">
        <p className="text-white text-sm text-center">
          { text1 }
        </p>
      </div>
      <div className="welcome__table mb-3 flex justify-center p-4 rounded-lg shadow-lg max-w-sm">
        <p className="text-white text-sm text-center">
          { text2 }
        </p>
      </div>
      <div className="welcome__table mb-3 flex justify-center p-4 rounded-lg shadow-lg max-w-sm">
        <p className="text-white text-sm text-center">
          { text3 }
        </p>
      </div>
    </div>
  )
}

export default WelomeItem
