import Button from "./Button";

function Menu({ curOpen, setCurOpen, onClick }) {
  return (
    <div className={`flex ${!curOpen && "flex-col"} text-center gap-3 my-3`}>
      <Button onClick={() => onClick("Reds")} color="red">
        Red Wines
      </Button>
      <Button onClick={() => onClick("Whites")} color="yellow">
        White Wines
      </Button>
      <Button onClick={() => onClick("Sparkling Wines")} color="pink">
        Sparkling Wines
      </Button>
    </div>
  );
}

export default Menu;
