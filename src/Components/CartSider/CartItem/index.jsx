/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { data as data1 } from '@/station';
import { useDispatch } from 'react-redux';
import trainSlice from '@/utils/trainSlice';
import { formatCurrency } from '@/utils/formatCurrency';

const CartItem = ({ data, index }) => {
    const { bookingDate, coach, seat, train, fromStation, toStation, depart, arrival, cost } = data;

    const formatedDepart = depart.slice(0, -3);
    const formatedArrival = arrival.slice(0, -3);
    const from = data1.find((item) => item.value == fromStation);
    const to = data1.find((item) => item.value == toStation);

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(
            trainSlice.actions.deleteTicket({
                payload: {
                    seat,
                    train,
                    coach,
                    bookingDate,
                    fromStation,
                    toStation,
                    depart,
                    arrival,
                },
                type: index == 0 ? 'departure' : 'return',
            })
        );
    };

    return (
        <div
            style={{
                width: '100%',
            }}
        >
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <div>
                    <div>
                        <b>
                            {train} from {from.name} to {to.name}
                        </b>
                    </div>
                    <div>
                        <b>Booking date:</b> <span>{bookingDate}</span>
                    </div>
                </div>
                <div>
                    <button
                        style={{
                            fontSize: '16px',
                            border: 'none',
                            background: 'transparent',
                            cursor: 'pointer',
                            padding: '10px',
                        }}
                        onClick={handleDelete}
                    >
                        <FontAwesomeIcon
                            icon={faTrash}
                            style={{
                                color: '#ff4d4f',
                                background: 'transparent',
                            }}
                        />
                    </button>
                </div>
            </div>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <div>
                    <div>
                        <b>Depart:</b> <span>{formatedDepart}</span>
                    </div>
                    <div>
                        <b>Arrive:</b> <span>{formatedArrival}</span>
                    </div>
                    <div>
                        <b>Cost:</b> <span>{formatCurrency(cost)}</span>
                    </div>
                </div>
                <div>
                    <div>
                        <b>Seat:</b> <span>{seat}</span>
                    </div>
                    <div>
                        <b>Coach:</b> <span>{coach}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
