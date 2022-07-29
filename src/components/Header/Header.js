import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
     Movies List 
    </span>
  );
};

export default Header;
