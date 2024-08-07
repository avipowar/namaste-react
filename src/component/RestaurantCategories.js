import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { data } = props;
  // console.log(data, "😂😂😂");
  return (
    <div>
      {/* header */}
      <div className="bg-gray-50 w-6/12 shadow-lg p-4 mx-auto my-10">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Accordion body */}
        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
