//TO DO: if expanding, break radio button into separate UI component.
function Filter({ onFilterChange, selectedFilter }) {
  return (
    <div className="mb-2 text-sm leading-6 flex items-center">
      <span className="font-semibold inline-flex items-center">Show:</span>
      <label className="mx-1 inline-flex items-center">
        <input
          className="mx-1"
          type="radio"
          value="all"
          checked={selectedFilter === "all"}
          onChange={() => onFilterChange("all")}
        />
        All
      </label>
      <label className="mx-1 inline-flex items-center">
        <input
          className="mx-1"
          type="radio"
          value="Recommended"
          checked={selectedFilter === "Recommended"}
          onChange={() => onFilterChange("Recommended")}
        />
        Recommended
      </label>
      <label className="mx-1 inline-flex items-center">
        <input
          className="mx-1"
          type="radio"
          value="light"
          checked={selectedFilter === "light"}
          onChange={() => onFilterChange("light")}
        />
        Light
      </label>
      <label className="mx-1 inline-flex items-center">
        <input
          className="mx-1"
          type="radio"
          value="medium"
          checked={selectedFilter === "medium"}
          onChange={() => onFilterChange("medium")}
        />
        Medium
      </label>
      <label className="mx-1 inline-flex items-center">
        <input
          className="mx-1"
          type="radio"
          value="full"
          checked={selectedFilter === "full"}
          onChange={() => onFilterChange("full")}
        />
        Full
      </label>
    </div>
  );
}

export default Filter;
