import Header from "./Header.js";
import Search from "./Search.js";
import "./App.css";

function Layout() {
  return (
    <div>
      <Header />
      <Search />
      <div className="footer">
        Coded by Alyson Felton
        <br />
        <a href="https://github.com/ADCeres/shecodes_dictionary">
          https://github.com/ADCeres/shecodes_dictionary
        </a>
        <br />
      </div>{" "}
    </div>
  );
}

export default Layout;
