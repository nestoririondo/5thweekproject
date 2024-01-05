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
    `https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=30`
  );

  // Front page
  useEffect(() => {
    setIsLoading(true);
    const url = `${frontPage}&page=${currentPage}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setTotalPages(data.nbPages);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [frontPage, currentPage]);

  // Reset current page when front page changes
  useEffect(() => {
    setCurrentPage(0);
  }, [frontPage]);

  // Search submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setCurrentPage(0);
    setFrontPage(
      `https://hn.algolia.com/api/v1/search?query=${search.query}&tags=${search.searchBy}&hitsPerPage=30`
      );
  };

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
