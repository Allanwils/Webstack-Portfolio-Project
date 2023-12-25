import { NavLink } from 'react-router-dom';

// Navbar component renders the navigation bar
const Navbar = ({
  searchHandler,
  searchQuery,
  setSearchQuery,
  inputField,
  savedItems,
}) => {
  // manupulating nav active class
  const navActive = ({ isActive }) => {
    return {
      color: isActive ? '#f43f5e' : null,
    };
  };

  return (
    // Container for the navigation bar
    <div className="navbar flex justify-between items-center container mx-auto py-8 flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="logo text-2xl font-bold lowercase italic">
        Dish<span className="text-rose-500">-recipe</span>
      </h2>
      {/* Search bar */}
      <form className="search-bar" onSubmit={searchHandler}>
        <input
          ref={inputField}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="search"
          placeholder="Search recipe..."
          required
          className="bg-white/75 p-3 px-8 lg:w-96 rounded-full outline-none shadow-lg shadow-rose-100 focus:shadow-rose-200 duration-300"
        />
      </form>
      {/* Navigation menu */}
      <ul className="menu flex gap-5">
        {/* Home link */}
        <li>
          <NavLink
            style={navActive}
            end
            to="/"
            className="text-gray-400 hover:text-gray-600 duration-300"
          >
            Home
          </NavLink>
        </li>
        {/* Favourites link with item count */}
        <li>
          <NavLink
            style={navActive}
            to="/favourites"
            className="text-gray-400 hover:text-gray-600 duration-300"
          >
            Favourites
            <span className="favourites-count font-bold text-sky-400">
              ({savedItems.length})
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
