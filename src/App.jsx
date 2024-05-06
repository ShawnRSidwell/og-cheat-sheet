import "./App.css";
import Logo from "./ui/Logo";
import Menu from "./ui/Menu";
import Table from "./ui/Table";

function App() {
  return (
    <div className={`flex flex-col items-center`}>
      <Logo />
      <Menu />
      <Table />
    </div>
  );
}

export default App;
