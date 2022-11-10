const repeatString = function( a, b) {
    if(b>-1){
    let c = '';
    for (let i = 0; i < b; i++) {
        c += a;
    }
    return c;
    }
    else{
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
