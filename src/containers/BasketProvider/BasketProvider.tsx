import React, { createContext, useState } from 'react';

interface BasketProviderInterface {
    children: React.ReactNode;
}
type ClickContextInterface = {
    click?: string;
    setClick: (newValue: string) => void;
};

export const ClickContext = createContext<ClickContextInterface>({
    click: '',
    setClick: () => {},
});

export const BasketProvider = ({ children }: BasketProviderInterface) => {
    const [click, setClick] = useState(localStorage?.getItem('counter') || '');
    return (
        <ClickContext.Provider value={{ click, setClick }}>
            {children}
        </ClickContext.Provider>
    );
};
