function Input() {
  return (
    <label>
      <input
        type="radio"
        value="all"
        checked={selectedFilter === "all"}
        onChange={() => onFilterChange("all")}
      />
      All
    </label>
  );
}

export default Input;
