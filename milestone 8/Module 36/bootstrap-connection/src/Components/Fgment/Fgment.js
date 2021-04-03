import React from 'react';
import {Fragment} from 'react';

const Fgment = () => {
    return (
        // simple way we could write like this fragment
    //    <>
    //        <h1>hello this Fragment </h1>
    //         <button>click me</button>
    //    </>
            
//without import we could write like this
            // <React.Fragment>
            //     <h1>hello this Fragment </h1>
            // <button>click me</button>
            // </React.Fragment>

// By import we can write like this and

<Fragment>
    <h1>hello this Fragment </h1>
            <button>click me</button>
            </Fragment>

       
    );
};

export default Fgment;