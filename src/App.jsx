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

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
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
  const getData = () => {
    setIsLoading(true);
    fetch(
      `http://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=30&page=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setTotalPages(data.nbPages);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (search.query === "") {
      return;
    }
    setIsLoading(true);
    fetch(
      `https://hn.algolia.com/api/v1/search?query=${search.query}&tags=${search.searchBy}&hitsPerPage=30&page=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setTotalPages(data.nbPages);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [currentPage]);

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
      <Content
        data={data}
        search={search}
        isLoading={isLoading}
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
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
