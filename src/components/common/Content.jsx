import ChildCard from "./ChildCard";
import logo from "../../assets/baby.jpeg";
import { useState } from "react";

const Content = () => {
  const [selected, setSelected] = useState(1);
  const data = [
    {
      id: 1,
      imageUrl: logo,
      imageName: "Neck Movement",
      description: "How to foster gradual neck movement for a baby",
      duration: "2",
      type: "image",
    },
    {
      id: 2,
      imageUrl: logo,
      imageName: "Neck Movement",
      description: "How to foster gradual neck movement for a baby",
      duration: "15",
      type: "video",
    },
    {
      id: 3,
      imageUrl: logo,
      imageName: "Neck Movement",
      description: "How to foster gradual neck movement for a baby",
      duration: "5",
      type: "image",
    },
  ];
  const handleClick = (id) => {
    setSelected(id);
  };
  return (
    <div className="bg-[#F7F7F7] p-4">
      <h2 className="mb-7 text-2xl font-semibold">Today's Focus</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item) => {
          return (
            <ChildCard
              key={item?.id}
              data={item}
              selected={selected}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Content;
