import Button from "./Button";
import Table from "./Table";

function Menu({ onClick }) {
  return (
    <div className="flex flex-col text-center gap-3 my-3">
      <Button onClick={onClick} color="red">
        Red Wines
      </Button>
      <Button onClick={onClick} color="yellow">
        White Wines
      </Button>
      <Button onClick={onClick} color="pink">
        Sparkling Wines
      </Button>
    </div>
  );
}

export default Menu;
