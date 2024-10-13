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
                    <b>Depart</b>
                    <span>{trainData && trainData.scheduleDepart.Depart}</span>
                </div>
                <div className={style.row}>
                    <b>Arrival</b>
                    <span>{trainData && trainData.scheduleArrive.Arrive}</span>
                </div>
                <div
                    className={style.row}
                    style={{
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    <div
                        style={{
                            marginTop: '8px',
                            width: '80%',
                            padding: '1px',
                            backgroundColor: '#ccc',
                        }}
                    ></div>
                    <div
                        style={{
                            width: '80%',
                            padding: '1px',
                            backgroundColor: '#ccc',
                        }}
                    ></div>
                    <div
                        style={{
                            marginTop: '8px',
                            width: '80%',
                            padding: '1px',
                            backgroundColor: '#000',
                            border: '1px solid rgb(109 108 108)',
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default TrainModel;
