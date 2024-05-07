import { useState } from "react";
import "./App.css";
import Logo from "./ui/Logo";
import Menu from "./ui/Menu";
import Table from "./ui/Table";
import wines from "./data/wine-sheet.json";

function App() {
  const [curOpen, setCurOpen] = useState(null);

  function handleClick(type) {
    type === curOpen ? setCurOpen(null) : setCurOpen(type);
  }

  return (
    <div className={`flex flex-col items-center justify-center`}>
      <Logo />
      {/* setIsOpen to be the wine that is opened */}
      <Menu curOpen={curOpen} onOpen={setCurOpen} onClick={handleClick} />
      {curOpen && <Table data={wines[curOpen]} />}
    </div>
  );
}

export default App;
