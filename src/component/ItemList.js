import { SWIGGY_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  console.log(items, "⬇️⬇️⬇️");

  return (
    <div>
      {items.map((item) => (
        <div
          className=" border-gray-200 border-b-2 flex flex-row justify-between p-4 m-2"
          key={item.card.info.id}
        >
          <div className="text-left flex flex-col ">
            <span className="font-bold">{item.card.info.name}</span>
            <span className="font-bold">
              ₹
              {item.card.info.defaultPrice / 100
                ? item.card.info.defaultPrice / 100
                : item.card.info.price / 100}{" "}
            </span>
            <div>
              <p className="text-left">{item.card.info.description}</p>
            </div>
          </div>
          <div className="ml-5">
            <img
              className="w-[250px]  rounded-2xl"
              src={SWIGGY_URL + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
