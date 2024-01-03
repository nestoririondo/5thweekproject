import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState({ query: "", searchBy: "story" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    fetch(
      `https://hn.algolia.com/api/v1/search?query=${search.query}&tags=${search.searchBy}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };
  const getData = () => {
    setIsLoading(true);
    fetch("http://hn.algolia.com/api/v1/search?tags=front_page")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (key, value) => {
    setSearch((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search news about..."
          onChange={(e) => {
            handleSearch("query", e.target.value);
          }}
        />
        <select
          onChange={(e) => {
            handleSearch("searchBy", e.target.value);
          }}
        >
          <option value="story">Story</option>
          <option value="comment">Comment</option>
        </select>
        <button>Search</button>
      </form>
      {isLoading ? (
        <p>Loading...</p>
      ) : !data || data.hits.length === 0 ? (
        <p>No data</p>
      ) : (
        data &&
        data.hits.map((news, index) => (
          <div key={index}>
            <p>
              {search.searchBy === "story" ? news.title : news.comment_text}
            </p>
          </div>
        ))
      )}
    </>
  );
}

export default App;
