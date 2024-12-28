import { createContext, useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
    const [user, setUser] = useState({});

    const auth = getAuth();

    const navigate = useNavigate();

    useEffect(() => {
        const unsubcribed = auth.onIdTokenChanged((user) => {
            console.log(user);

            if (user?.uid) {
                setUser(user);
                localStorage.setItem('access_token_rt', user.accessToken);
                return;
            }

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
