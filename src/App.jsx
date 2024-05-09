import { useState } from "react";
import "./App.css";
import Logo from "./ui/Logo";
import Menu from "./ui/Menu";
import Table from "./ui/Table";
import wines from "./data/wine-sheet.json";
import Filter from "./ui/Filter";

function App() {
  const [curOpen, setCurOpen] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("all");
  let data = wines[curOpen];
  function handleClick(type) {
    type === curOpen ? setCurOpen(null) : setCurOpen(type);
  }
  function handleFilterChange(currentFilter) {
    if (currentFilter === selectedFilter) return;
    setSelectedFilter(currentFilter);
  }

  switch (selectedFilter) {
    case "all":
      data = wines[curOpen];
      break;
    case "Recommended":
      data = wines[curOpen].filter((wine) => wine.Recommend == "x");
      break;
    case "light":
      data = wines[curOpen].filter((wine) => wine.Body == "light");
      break;
    case "medium":
      data = wines[curOpen].filter((wine) => wine.Body == "medium");
      break;
    case "full":
      data = wines[curOpen].filter((wine) => wine.Body == "full");
      break;
    default:
      data = wines[curOpen];
      break;
  }

  return (
    <>
      <div className={`flex flex-col items-center justify-center`}>
        <Logo />
        <Menu curOpen={curOpen} onOpen={setCurOpen} onClick={handleClick} />
        {curOpen && (
          <Filter
            onFilterChange={handleFilterChange}
            selectedFilter={selectedFilter}
          />
        )}
      </div>
      {curOpen && <Table data={data} />}
    </>
  );
}

export default App;
