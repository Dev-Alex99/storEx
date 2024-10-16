import { Context, createContext } from 'preact';
import { useState } from 'preact/hooks';

export const AppContext = createContext({}) as Context<any>;

export const AppProvider = ({ children }: any) => {
    const [cart, setCart] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return <AppContext.Provider value={{ cart, setCart, sidebarOpen, setSidebarOpen }}>{children}</AppContext.Provider>;
};
