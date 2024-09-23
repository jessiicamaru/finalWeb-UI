import { useEffect, useState } from 'react';
import style from './style.module.css';

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
            className={style.container}
        >
            <p className={style.trainName}>{trainData && trainData.trainid}</p>
            <div className={style.trainContainer}>
                <div className={style.row}>
                    <span>Depart</span>
                    <span>{trainData && trainData.scheduleDepart.Depart}</span>
                </div>
                <div className={style.row}>
                    <span>Arrival</span>
                    <span>{trainData && trainData.scheduleArrive.Arrive}</span>
                </div>
                <div className={style.row}>
                    <div className={style.col}>
                        <span>Ordered</span>
                        <span>0</span>
                    </div>
                    <div className={style.col}>
                        <span>Available</span>
                        <span>23</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainModel;
