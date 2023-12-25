import { Link } from 'react-router-dom';


// Recipe component renders individual recipe items
const Recipe = ({ recipe }) => {
  return (
    // Container for each recipe item
    <div className="recipe w-80 overflow-hidden bg-white/75 rounded-2xl shadow-xl p-5 shadow-rose-100 border-2 border-white flex flex-col gap-5">
      <div className="img h-40 overflow-hidden rounded-lg flex justify-center items-center">
        {/* Recipe image */}
        <img
          src={recipe.image_url}
          alt={recipe.title}
          className="block w-full rounded-lg"
        />
      </div>
      {/* Text section */}
      <div className="texts">
        {/* Recipe publisher */}
        <span className="publisher text-xs uppercase text-sky-400 font-semibold tracking-widest">
          {recipe.publisher}
        </span>
        {/* Recipe title */}
        <h2 className="title text-2xl font-semibold truncate">
          {recipe.title}
        </h2>
        {/* Link to view detailed recipe */}
        <Link
          to={`/recipe-item/${recipe.id}`}
          className="bg-gradient-to-br from-orange-400 to-orange-600 text-rose-50 p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-2 inline-block shadow-md shadow-rose-200 hover:shadow-lg hover:shadow-rose-300 duration-300"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default Recipe;
