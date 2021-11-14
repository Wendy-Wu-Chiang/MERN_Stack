import React from  'react';

const Display = (props) =>{

    const{boxColorList} = props;

    return(
        <div>
            {
                boxColorList.map((boxColor, index) =>(
                    <div key={index} style={{
                        display: "inline-block",
                        margin: "7px",
                        height: "70px",
                        width: "50px",
                        backgroundColor: boxColor
                    }}>
                     </div>
                ))
            }
        </div>
    )

}
export default Display;