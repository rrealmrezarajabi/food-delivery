import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="px-6 mt-10">
      <h1 className="font-bold text-3xl mb-2">Explore our menu</h1>

      <p className="text-gray-600 max-w-[700px] mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sequi
        quisquam in dolorem, totam porro autem eveniet perferendis debitis
        tenetur laboriosam, dolorum, modi repudiandae architecto nobis animi
        beatae consequatur optio!
      </p>

      <div className="flex justify-center gap-6 py-3">
        {menu_list.map((item, index) => {
          const active = category === item.menu_name;

          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="min-w-[120px] flex flex-col items-center cursor-pointer group"
            >
              <div
                className={`w-[120px] h-[120px] rounded-full overflow-hidden shadow-lg transition 
          ${
            active
              ? "ring-4 ring-orange-500 scale-105"
              : "group-hover:scale-105"
          }`}
              >
                <img
                  src={item.menu_image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <p
                className={`mt-2 font-medium transition 
          ${
            active
              ? "text-orange-500"
              : "text-gray-700 group-hover:text-orange-500"
          }`}
              >
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
