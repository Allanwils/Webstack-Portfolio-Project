// Footer component renders the footer section of the website
const Footer = () => {
  return (
    // Container for the footer with styling
    <footer className="py-8 flex flex-col gap-3 items-center bg-orange-200 opacity-75">
      {/* Logo in the footer */}
      <h2 className="text-2xl font-bold lowercase italic">
        Dish<span className="text-rose-500">-Recipe</span>
      </h2>
      {/* Copyright information */}
      <p>&copy; {new Date().getFullYear()} Dish-Recipe. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
