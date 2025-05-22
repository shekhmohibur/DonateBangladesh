function getValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNum = parseFloat(inputValue);
    return inputValueNum;    
}