import SearchBar from "./SearchBar";

const Header = ({ handleSubmit, handleSearch, search, setFrontPage }) => {
  return (
    <div className="header">
      <div className="header-left">
        <p className="n">
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              setFrontPage(
                "https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=30"
              );
            }}
          >
            N
          </a>
        </p>
        <p className="hn">
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              setFrontPage(
                "https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=30"
              );
            }}
          >
            Hacker News
          </a>
        </p>{" "}
        <p className="">
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              setFrontPage(
                "https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=30"
              );
            }}
          >
            new
          </a>
        </p>
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
      <SearchBar
        handleSubmit={handleSubmit}
        handleSearch={handleSearch}
        search={search}
      />
    </div>
  );
};

export default Header;
