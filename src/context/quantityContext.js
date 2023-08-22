import { createContext, useState } from "react";

export const QuantityContext = createContext();

export const QuantityProvider = ( { children } ) =>
{
    const [ sumQuantity, setSumQuantity ] = useState( 0 );



    return (
        <QuantityContext.Provider value={ { sumQuantity, setSumQuantity } }>
            <div>{ children }</div>
        </QuantityContext.Provider>
    );
};