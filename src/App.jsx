import { useState } from "react";
import "./App.css";
import Logo from "./ui/Logo";
import Menu from "./ui/Menu";
import Table from "./ui/Table";
import Button from "./ui/Button";
import excelImporter from "./utils/excelImporter";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    excelImporter();
  };

  return (
    <div className={`flex flex-col items-center`}>
      <Logo />
      {/* setIsOpen to be the wine that is opened */}
      <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <Table />}
      <Button onClick={handleClick}>Test</Button>
    </div>
  );
}

export default App;
