function Button({ color, onClick, children }) {
  let bgColor;

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
  const buttonStyle = `${bgColor} text-black font-semibold py-2 px-4 rounded tracking-wider shadow-md`;
  return (
    <button className={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
