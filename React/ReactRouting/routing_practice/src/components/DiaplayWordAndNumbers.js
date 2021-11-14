const DisplayWordAndNumber = (props) =>{
    const{word}=props;
    if (isNaN(word)){
        return(
        <h1>
            The word is: {word}!!
        </h1>)
    }else{
        return(
            <h1>
                The number is: {word}!!
            </h1>
        )
    }
}
export default DisplayWordAndNumber;