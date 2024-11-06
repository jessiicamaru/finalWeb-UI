import { getMapData } from '../highchartData';
import HighchartComponent from '../HighChart';
import { referenceData } from '../HighChart/provinces';
import { CaretRightOutlined } from '@ant-design/icons';
import { useEffect, useState, memo } from 'react';

const StationGroup = () => {
    const [mapData, setMapData] = useState({});

    useEffect(() => {
        getMapData().then((res) => setMapData(res));
    });
    return (
        <div className="h-screen mb-32  mt-6 ">
            <h2 className="text-3xl w-full text-center my-6">Station</h2>
            <h2 className="text-lg w-full text-center my-6">Tourist destinations across the country</h2>
            <div className="flex h-[600px] max-[1023px]:w-full max-[1023px]:flex-wrap">
                <div className="w-3/5 h-[600px] gap-3 flex p-6 border-[1px] border-solid border-s-[#0505050f] max-[1023px]:w-full">
                    <div className="w-1/2 gap-3 flex flex-wrap p-6 hover:drop">
                        {referenceData.map((item, index) => {
                            if (index + 1 <= 7) {
                                return (
                                    <div
                                        className="w-full flex gap-2 items-center hover:drop-shadow-md cursor-pointer bg-white p-3"
                                        key={item['hc-key']}
                                    >
                                        <CaretRightOutlined
                                            style={{
                                                fontSize: '16px',
                                                color: '#1677ff',
                                            }}
                                        />
                                        {index + 1} {item.name} Station
                                    </div>
                                );
                            }
                        })}
                    </div>

                    <div className="w-1/2 gap-3 flex flex-wrap p-6">
                        {referenceData.map((item, index) => {
                            if (index + 1 > 7) {
                                return (
                                    <div
                                        className="w-full flex gap-2 items-center hover:drop-shadow-md cursor-pointer bg-white p-3"
                                        key={item['hc-key'] + item.name}
                                    >
                                        <CaretRightOutlined
                                            style={{
                                                fontSize: '16px',
                                                color: '#1677ff',
                                            }}
                                        />
                                        {index + 1} {item.name} Station
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
                <div className="w-2/5 h-[600px] max-[1023px]:w-full">
                    <HighchartComponent mapData={mapData} />
                </div>
            </div>
        </div>
    );
};

export default memo(StationGroup);
