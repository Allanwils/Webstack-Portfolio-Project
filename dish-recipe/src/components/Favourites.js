import Recipe from './Recipe';

// Favourites component renders the user's saved recipes
const Favourites = ({ savedItems }) => {
  return (
    // Container for the Favourites component
    <div className="favoutite-section ">
      {/* Text section for Favourites */}
      <div className="favourite-text text-2xl lg:text-4xl font-semibold text-rose-300 text-center py-8 capitalize leading-normal">
        {/* Display message based on the number of saved recipes */}
        {savedItems.length === 0 ? (
          <p>Your favourite list is empty!</p>
        ) : (
          <p>Your favourite recipe{savedItems.length !== 1 ? 's' : null}</p>
        )}
      </div>
      {/* Container for displaying saved recipes */}
      <div className="favourite-items container mx-auto py-10 flex flex-wrap gap-10 justify-center">
        {savedItems.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
