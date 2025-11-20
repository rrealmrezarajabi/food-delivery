const Header = () => {
  return (
    <div className='h-[34vw]  mx-auto bg-[url("/header_img.png")] bg-no-repeat bg-cover bg-center relative flex items-center'>
      <div className="absolute left-10 md:left-20 text-white max-w-[400px]">
        <h2 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          Welcome to Food Delivery
        </h2>

        <p className="text-lg md:text-xl mt-3 opacity-90 ">
          Your favorite meals delivered fast at your door.
        </p>

        <button className="cursor-pointer mt-5 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg transition transform hover:scale-105">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Header;
