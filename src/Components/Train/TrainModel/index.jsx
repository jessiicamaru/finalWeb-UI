import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const TrainModel = ({ data, active }) => {
    const [trainData, setTrainData] = useState(null);

    useEffect(() => {
        data && setTrainData(data);
    }, [data]);

    // console.log(trainData);

    return (
        <div
            style={{
                backgroundColor: active ? '#1676fd' : '#999',
            }}
            className="h-[100px] w-[100px] px-[10px] py-0 text-[10px] rounded-2xl cursor-pointer"
        >
            <p className="text-xs font-bold px-[2px] py-[5px] bg-[#fff] inline-block my-[5px] rounded-md">{trainData && trainData.trainid}</p>
            <div className="h-[50px] w-full bg-[#fff] px-[2px] rounded-[5px]">
                <div className="w-full flex justify-between">
                    <b>Depart</b>
                    <span>{trainData && trainData.scheduleDepart.Depart}</span>
                </div>
                <div className="w-full flex justify-between">
                    <b>Arrival</b>
                    <span>{trainData && trainData.scheduleArrive.Arrive}</span>
                </div>
                <div className="w-full flex justify-center flex-wrap">
                    <div className="mt-2 w-4/5 p-[1px] bg-[#ccc]"></div>
                    <div className="w-4/5 p-[1px] bg-[#ccc]"></div>
                    <div className="mt-2 w-4/5 p-[1px] bg-black border-solid border-[1px] border-[#6d6c6c]"></div>
                </div>
            </div>
        </div>
    );
};

export default TrainModel;
