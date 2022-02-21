import Header from "./Header.js";
import Search from "./Search.js";
import "./App.css";

function Layout() {
  return (
    <div>
      <Header />
      <Search />
      <hr className="hrNew" />
    </div>
  );
}

export default Layout;
