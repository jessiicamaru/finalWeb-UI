import style from './style.module.css';

const TrainModel = () => {
    return (
        <div
            style={{
                height: '120px',
                width: '120px',
                backgroundColor: '#1676fd',
                padding: '0 10px',
                fontSize: '10px',
                borderRadius: '15px',
                cursor: 'pointer',
            }}
        >
            <p
                style={{
                    fontSize: '13px',
                    fontWeight: 'bold',
                    padding: '2px 5px',
                    borderRadius: '5px',
                    backgroundColor: '#fff',
                    display: 'inline-block',
                    margin: '5px 0',
                }}
            >
                SE8
            </p>
            <div
                style={{
                    height: '70px',
                    width: '100%',
                    backgroundColor: '#fff',
                    padding: '0 2px',
                    borderRadius: '5px',
                }}
            >
                <div className={style.row}>
                    <span>Depart</span>
                    <span>20/9 00:56</span>
                </div>
                <div className={style.row}>
                    <span>Arrival</span>
                    <span>20/9 00:56</span>
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
