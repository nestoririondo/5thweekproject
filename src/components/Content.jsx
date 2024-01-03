import triangle from "../images/triangle.svg";

const Content = ({ data, isLoading, search }) => {
  return (
    <div className="content">
      {isLoading ? (
        <p>Loading...</p>
      ) : !data || data.hits.length === 0 ? (
        <p>No data</p>
      ) : (
        data &&
        data.hits.map((news, index) => (
          <div className="story" key={index}>
            {search.searchBy === "story" ? (
              <>
                <div className="first-row">
                  <p className="fr-index">{`${index + 1}.`}</p>
                  <img className="fr-img" src={triangle} />
                  <a className="fr-title" href={news.url}>
                    <p className="fr-title">{news.title}</p>
                  </a>
                  <p className="fr-url">
                    {news.url ? (
                      <a
                        href={news.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ({new URL(news.url).hostname})
                      </a>
                    ) : (
                      ""
                    )}
                  </p>
                </div>
                <div className="second-row">
                  <p className="sr-points">
                    {news.points} points by{" "}
                    <a
                      className="sr-author"
                      href={`https://news.ycombinator.com/user?id=${news.author}`}
                    >
                      {news.author}
                    </a>{" "}
                    {Math.floor(
                      (new Date().getTime() - news.created_at_i * 1000) /
                        (1000 * 60 * 60)
                    )}{" "}
                    hours ago | {news.num_comments} comments
                  </p>
                </div>
              </>
            ) : (
              news.comment_text
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Content;
