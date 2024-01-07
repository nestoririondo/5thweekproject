import Pagination from "./Pagination";
import githubMark from "../assets/github-mark.svg";


const Footer = ({ totalPages, currentPage, setCurrentPage }) => {
  return (
    <footer>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className="orange-bar"></div>
      <div className="links-container">
        <div className="links">
          <a>Guidelines</a>
          <span>|</span>
          <a>FAQ</a>
          <span>|</span>
          <a>Lists</a>
          <span>|</span>
          <a>API</a>
          <span>|</span>
          <a>Security</a>
          <span>|</span>
          <a>Legal</a>
          <span>|</span>
          <a>Apply to YC</a>
          <span>|</span>
          <a>Contact</a>
        </div>
      </div>
      <div className="contact">
        <p>
          Developed by{" "}
          <a
            href="
                    http://www.nestoririondo.com"
            target="_blank"
            rel="noreferrer"
          >
            Néstor Iriondo
          </a>
        </p>
        <a href="https://github.com/nestoririondo">
          <img src={githubMark} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
