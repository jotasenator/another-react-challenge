import { createContext, useState } from "react";

export const TotalContext = createContext();

export const TotalProvider = ( { children } ) =>
{
    const [ sumTotal, setSumTotal ] = useState( 0 );



    return (
        <TotalContext.Provider value={ { sumTotal, setSumTotal } }>
            <div>{ children }</div>
        </TotalContext.Provider>
    );
};