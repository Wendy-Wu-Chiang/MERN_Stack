import React, { useState } from 'react';

const Generator = (props) => {

    const {boxColorList, setBoxColorList} = props;
    const[boxColor, setBoxColor] = useState("");

    const generateBox = (e) =>{
        e.preventDefault();

        setBoxColorList([...boxColorList, boxColor]);
        // props.setBoxes([...props.boxes, boxColor]);
        // setBoxColor("");
    }
    return(
        <div>
            <form onSubmit= {generateBox} style={{margin: "20px"}}>
                <div>
                    <lable htmlFor="boxColor">Color</lable>
                    <input type="text" name="boxColor"
                    onChange={ (e) => setBoxColor( e.target.value ) }/>
                    <button>Add</button>
                </div>
            </form>
        </div>
    )   
}

export default Generator;