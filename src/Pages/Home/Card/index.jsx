/* eslint-disable react/prop-types */
const Card = ({ data }) => {
    return (
        <div className="bg-white w-1/3 flex items-center p-4 drop-shadow-md hover:opacity-85 max-[1023px]:w-full">
            <div className="w-[55px] bg-[#1ba0e2] p-2 flex justify-center rounded-full h-[55px]">
                <img src={`/cardicon/feature_search_image_${data.img}.png`} className="w-full" alt="" />
            </div>
            <div className="flex-1 px-4">
                <h2 className="font-bold w-full text-[#1ba0e2]">{data.title}</h2>
                <p>{data.content}</p>
            </div>
        </div>
    );
};

export default Card;
