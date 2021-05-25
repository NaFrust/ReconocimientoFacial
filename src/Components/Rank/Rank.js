import React from 'react';


const Rank = ({name, entries}) =>{
    return (
        <div>
            <div  className="blue f3">
                {`${name} tu ranking es ....`}
            </div>
            <div  className="blue f1">
                {entries}
            </div>
        </div>
    );
}
export default Rank;