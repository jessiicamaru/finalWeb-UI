/* eslint-disable no-unused-vars */
import { List } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line react/prop-types
const CartItem = ({ bookingDate, coach, seat, train, fromStation, toStation, id }) => {
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
                        <b>SE8 from DN to DH</b>
                    </div>
                    <div>
                        Booking date: <span>2024-12-16</span>
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
                    Depart: <span>00:00</span>
                </div>
                <div>
                    Arrive: <span>00:00</span>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
