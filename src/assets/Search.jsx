const Search = () => {
  const handleChange = (event) => {
    console.log("Typing detected");
    console.log(event);
  };

  return (
    <div>
      <input onChange={handleChange} />
    </div>
  );
};

export default Search;
