import { IoMdTime } from "react-icons/io";
import { TiTick } from "react-icons/ti";

const ChildCard = ({ data, selected, handleClick, key }) => {
  return (
    <div className="flex justify-center items-center gap-2">
      {selected === data?.id ? (
        <span className="relative z-10">
          <TiTick className="bg-gray-500 text-white rounded-full" size={20} />{" "}
        </span>
      ) : (
        <span
          onClick={() => handleClick(data?.id)}
          className="bg-[#FE992F] min-w-5 min-h-5 rounded-full"
        ></span>
      )}
      <div className="border-l-2 h-full border-l-gray-400 border-dashed relative right-4 z-0"></div>
      <div key={key} className="rounded-lg bg-white">
        <figure>
          <img
            src={data?.imageUrl}
            alt={data?.imageName}
            className="w-full rounded-t-lg"
          />
        </figure>
        <figcaption className="p-4">
          <div className="flex flex-wrap justify-between items-center pb-4">
            <span className="text-2xl font-bold">{data?.imageName}</span>
            <span className="inline-flex gap-2 items-center text-lg text-gray-500">
              <IoMdTime size={23} />
              {data?.duration} min {data?.type === "image" ? "read" : "video"}
            </span>
          </div>
          <p className="text-xl">{data?.description}</p>
        </figcaption>
      </div>
    </div>
  );
};

export default ChildCard;
