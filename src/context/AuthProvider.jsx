import { createContext, useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import axios from '@/config/axios';
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
    const [user, setUser] = useState({});

    const auth = getAuth();

    const navigate = useNavigate();

    const fn = async (uid) => {
        try {
            const res = await axios.get(import.meta.env.VITE_API_URL_V3 + '/get-user/?uid=' + uid);
            console.log(res.data);
            if (res.data.data.UID) {
                setUser(res.data.data);
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        const unsubcribed = auth.onIdTokenChanged((user) => {
            console.log(user);

            if (user?.uid) {
                setUser(user);
                fn(user.uid);
                localStorage.setItem('access_token_rt', user.accessToken);

                return;
            }

            if (location.pathname.includes('/')) return;
            else if (location.pathname.includes('booking-info')) return;
            else if (location.pathname.includes('return-ticket')) return;
            else if (location.pathname.includes('term-condition')) return;
            else if (location.pathname.includes('contact')) return;
            else if (location.pathname.includes('faqs')) return;

            setUser({});
            localStorage.removeItem('access_token_rt');
            navigate('/login');
        });

        return () => {
            unsubcribed();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth]);

    return <AuthContext.Provider value={{ user, setUser, auth }}>{children}</AuthContext.Provider>;
}
