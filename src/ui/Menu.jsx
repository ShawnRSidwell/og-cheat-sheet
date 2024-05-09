import Button from "./Button";

function Menu({ curOpen, onClick }) {
  return (
    <div
      className={`flex ${
        !curOpen && "flex-col"
      } text-center gap-3 my-3 mb-3 mx-3`}
    >
      <Button onClick={() => onClick("Reds")} size={curOpen && "small"}>
        Red Wines
      </Button>
      <Button onClick={() => onClick("Whites")} size={curOpen && "small"}>
        White Wines
      </Button>
      <Button
        onClick={() => onClick("Sparkling Wines")}
        size={curOpen && "small"}
      >
        Sparkling Wines
      </Button>
    </div>
  );
}

export default Menu;
