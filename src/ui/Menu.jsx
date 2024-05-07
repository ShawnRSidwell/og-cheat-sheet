import Button from "./Button";

function Menu({ curOpen, onClick }) {
  return (
    <div
      className={`flex ${!curOpen && "flex-col"} text-center gap-3 my-3 mx-3`}
    >
      <Button
        onClick={() => onClick("Reds")}
        color="red"
        size={curOpen && "small"}
      >
        Red Wines
      </Button>
      <Button
        onClick={() => onClick("Whites")}
        color="yellow"
        size={curOpen && "small"}
      >
        White Wines
      </Button>
      <Button
        onClick={() => onClick("Sparkling Wines")}
        color="pink"
        size={curOpen && "small"}
      >
        Sparkling Wines
      </Button>
    </div>
  );
}

export default Menu;
