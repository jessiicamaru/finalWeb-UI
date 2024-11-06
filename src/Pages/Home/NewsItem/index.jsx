/* eslint-disable react/prop-types */
const NewsItem = ({ data }) => {
    return (
        <div className="w-1/3 p-2 max-lg:w-1/2 max-sm:w-[80%]">
            <div className="bg-white drop-shadow-md p-2 h-[400px] hover:opacity-80 cursor-pointer max-2xl:h-[480px]">
                <div className="w-full h-[200px] overflow-hidden max-sm:h-[250px]">
                    <img src={`/postimg/${data.img}.jpg`} alt="" className="w-full object-cover  max-2xl:h-full " />
                </div>
                <div>
                    <h2 className="font-bold text-[14px] mt-3">{data.title}</h2>
                    <p className="text-justify">{data.content}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsItem;
