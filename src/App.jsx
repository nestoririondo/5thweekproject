import { useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState({ query: "", searchBy: "story" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    fetch(
      `https://hn.algolia.com/api/v1/search?query=${search.query}&tags=${search.searchBy}&hitsPerPage=30`
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
    fetch("http://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=30")
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
      <Header
        handleSubmit={handleSubmit}
        handleSearch={handleSearch}
        search={search}
      />
      <Content data={data} search={search} isLoading={isLoading} />
    </>
  );
}

export default App;
