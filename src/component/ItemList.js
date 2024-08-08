import { SWIGGY_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  // console.log(items, "⬇️⬇️⬇️");

  return (
    <div>
      {items.map((item) => (
        <div
          className=" border-gray-200 border-b-2 flex flex-row justify-between p-4 m-2"
          key={item.card.info.id}
        >
          <div className="text-left flex flex-col w-9/12 ">
            <span className="font-bold">{item.card.info.name}</span>
            <span className="font-bold">
              ₹
              {item.card.info.defaultPrice / 100
                ? item.card.info.defaultPrice / 100
                : item.card.info.price / 100}{" "}
            </span>
            <div>
              <p className="text-left text-sm">{item.card.info.description}</p>
            </div>
          </div>
          <div className="ml-5 w-3/12 ">
            <div className="absolute ml-[24px]">
              <button className=" bg-white text-black rounded-md w-10 h-6 text-[10px] font-bold shadow-lg">
                Add
              </button>
            </div>
            <img
              className="rounded-xl"
              src={SWIGGY_URL + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
