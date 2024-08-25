import { Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";

function NavBar() {
  return (
    <nav className="flex justify-between items-center px-10 py-3">
      <div>
        <Link to="/">
          <h1 className="text-3xl font-bold">
            Tech<span className="text-customPink">Shop</span>
          </h1>
        </Link>
      </div>
      <div className="flex gap-5 items-center text-lg font-bold">
        <Link to="/" className="bg-customPink px-[10px] py-[1px] rounded">
          Shop
        </Link>
        <Link to="/purchased-items">Purchases</Link>
        <Link to="/checkout">{<GiShoppingBag className="text-xl" />}</Link>
      </div>
    </nav>
  );
}

export default NavBar;
