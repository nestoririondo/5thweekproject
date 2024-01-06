import triangle from "../images/triangle.svg";
import { timeAgoCalculator } from "../utils/timeAgoCalculator.js";

const Content = ({ data, isLoading, search, currentPage }) => {
  const loadingContent = <p className="loading">Loading...</p>;
  const noDataContent = <p>No data</p>;

  const dataContent = data?.hits.map((news, index) => (
    <div className="story" key={index}>
      {search.searchBy === "story" ? (
        <>
          <div className="first-row">
            <p className="fr-index">
              {currentPage === 0
                ? `${index + 1}.`
                : `${index + 1 + currentPage * 30}.`}
            </p>
            <img className="fr-img" src={triangle} />
            <a className="fr-title" href={news.url}>
              <p className="fr-title">{news.title}</p>
            </a>
            <p className="fr-url">
              {news.url ? (
                <a href={news.url} target="_blank" rel="noopener noreferrer">
                  ({new URL(news.url).hostname})
                </a>
              ) : (
                ""
              )}
            </p>
          </div>
          <div className="second-row">
            <p className="sr-points">
              {news.points} point{news.points !== 1 ? "s" : ""} by{" "}
              <a
                className="sr-author"
                href={`https://news.ycombinator.com/user?id=${news.author}`}
              >
                {news.author}
              </a>{" "}
              {timeAgoCalculator(news.updated_at)} |{" "}
              {news.num_comments} comment{news.num_comments !== 1 ? "s" : ""}
            </p>
          </div>
        </>
      ) : (
        news.comment_text
      )}
    </div>
  ));

  return (
    <div className="content">
      {isLoading
        ? loadingContent
        : !data || data.hits.length === 0
        ? noDataContent
        : dataContent}
    </div>
  );
};

export default Content;
