import React, {useState} from 'react'

const UserDetailsContext = React.createContext({});

const UserDetailsContextProvider = (props) => {
    const [userDetails, setUserDetails] = useState({});

    return (
        <UserDetailsContext.Provider value={{userDetails, setUserDetails}}>
            {props.children}
        </UserDetailsContext.Provider>
    );
};

export {UserDetailsContext, UserDetailsContextProvider};
