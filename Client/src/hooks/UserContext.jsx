import { createContext, useEffect, useState } from "react";
// Uncomment and ensure AuthService works correctly
// import AuthService from "../services/admin/authService";

export const UserProvider = createContext();

const UserContext = ({ children }) => {
    const token = localStorage.getItem('token');
    const [user, setUser] = useState(null);

    useEffect(() => {
        const GetUserDataLogin = async () => {
            if (token) {
                // Uncomment this when ready
                // const getData = await AuthService.GetUserData(JSON.parse(token));
                const getData = { name: 'Mock User', admin: true };  // Mock data for now
                setUser(getData);
            }
        };
        GetUserDataLogin();
    }, [token]);

    return (
        <UserProvider.Provider value={{ user }}>
            {children}
        </UserProvider.Provider>
    );
};

export default UserContext;
