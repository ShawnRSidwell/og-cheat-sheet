function Button({ color, onClick, size, disabled, children }) {
  let bgColor;
  let buttonSize;
  switch (size) {
    case "small":
      buttonSize = "py-1 px-2 md:px-3";
      break;
    default:
      buttonSize = "py-3 px-10";
      break;
  }
  // Available to use if button color is needed
  switch (color) {
    case "selected":
      bgColor = "border-black border text-black bg-white";
      break;
    default:
      bgColor =
        "bg-stone-800 text-white transition-transform transform hover:scale-105 focus:outline-none";
      break;
  }
  const buttonStyle = `${bgColor} font-medium ${buttonSize} rounded tracking-wider shadow-md font-sans`;
  return (
    <button className={buttonStyle} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
