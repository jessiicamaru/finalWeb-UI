import { createContext, useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import axios from '@/config/axios';
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
    const [user, setUser] = useState({ firebase: {}, db: {} });

    const auth = getAuth();

    const navigate = useNavigate();

    const fn = async (user, uid) => {
        try {
            const res = await axios.get(import.meta.env.VITE_API_URL_V3 + '/get-user/?uid=' + uid);
            // console.log(res.data);
            if (res.data.data.UID) {
                setUser({ firebase: user, db: { ...res.data.data } });
                // console.log({ firebase: user, db: { ...res.data.data } });
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        const unsubcribed = auth.onIdTokenChanged((u) => {
            // console.log(u);

            if (u?.uid) {
                fn(u, u.uid);
                localStorage.setItem('access_token_rt', u.accessToken);

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

    console.log('[befor return]', user);
    return <AuthContext.Provider value={{ user, setUser, auth }}>{children}</AuthContext.Provider>;
}
