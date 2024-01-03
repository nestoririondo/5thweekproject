import SearchBar from "./SearchBar";

const Header = ({ handleSubmit, handleSearch, search }) => {
  return (
    <div className="header">
      <div className="header-left">
        <p className="n">N</p>
        <p className="hn">Hacker News</p>
        <p className="">new</p>
        <p>|</p>
        <p className="">past</p>
        <p>|</p>
        <p className="">comments</p>
        <p>|</p>
        <p className="">ask</p>
        <p>|</p>
        <p className="">show</p>
        <p>|</p>
        <p className="">jobs</p>
        <p>|</p>
        <p className="">submit</p>
      </div>
      <SearchBar handleSubmit={handleSubmit} handleSearch={handleSearch} search={search} />
    </div>
  );
};

export default Header;
