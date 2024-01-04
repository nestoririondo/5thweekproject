import { useState, useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState({ query: "", searchBy: "story" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [frontPage, setFrontPage] = useState(
    `http://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=30`
  );

  // Front page
  useEffect(() => {
    setIsLoading(true);
    fetch(frontPage)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setTotalPages(data.nbPages);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [frontPage]);

  // Search
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setCurrentPage(0);
    fetch(
      `https://hn.algolia.com/api/v1/search?query=${search.query}&tags=${search.searchBy}&hitsPerPage=30&page=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setTotalPages(data.nbPages);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  // https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=30

  useEffect(() => {
    if (search.query === "") {
      return;
    }
    setIsLoading(true);
    fetch(`https://hn.algolia.com/api/v1/search?query=${search.query}&tags=${search.searchBy}&hitsPerPage=30&page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setTotalPages(data.nbPages);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [currentPage]);

  // Search object
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
        setFrontPage={setFrontPage}
      />
      <Content
        data={data}
        search={search}
        isLoading={isLoading}
        totalPages={totalPages}
        currentPage={currentPage}
      />
      <Footer
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default App;
