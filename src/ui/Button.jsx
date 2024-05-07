function Button({ color, onClick, size, children }) {
  let bgColor;
  let buttonSize;
  switch (size) {
    case "small":
      buttonSize = "py-1 px-1 px-3";
      break;
    default:
      buttonSize = "py-3 px-10";
      break;
  }
  // Map color prop to corresponding Tailwind CSS classes
  switch (color) {
    case "red":
      bgColor = "bg-rose-700 hover:bg-rose-800 text-white";
      break;
    case "yellow":
      bgColor = "bg-yellow-400 hover:bg-yellow-600 text-black";
      break;
    case "pink":
      bgColor = "bg-pink-500 hover:bg-pink-700 text-white";
      break;
    default:
      bgColor = "bg-blue-500 hover:bg-blue-700";
      break;
  }
  const buttonStyle = `${bgColor} text-black font-semibold ${buttonSize} rounded tracking-wider shadow-md`;
  return (
    <button className={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
