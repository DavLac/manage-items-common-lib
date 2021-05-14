import React, {useState} from 'react'

const SnakeBarContext = React.createContext({});

const SnakeBarContextProvider = (props) => {
    const [openSnakeBar, setOpenSnakeBar] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnakeBar(false);
    };

    return (
        <SnakeBarContext.Provider value={{
            openSnakeBar: openSnakeBar,
            setOpenSnakeBar: setOpenSnakeBar,
            handleClose: handleClose
        }}>
            {props.children}
        </SnakeBarContext.Provider>
    );
};

export {SnakeBarContext, SnakeBarContextProvider};
