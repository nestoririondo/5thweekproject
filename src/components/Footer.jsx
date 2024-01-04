import Pagination from "./Pagination";	

const Footer = ({totalPages, currentPage, setCurrentPage}) => {
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
    </footer>
  );
};

export default Footer;
