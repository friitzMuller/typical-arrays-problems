exports.min = function min(array) {
    if (array == undefined || array.length == 0) {
        return 0
    } else {
        let z = array[0];
        for(let i = 0;i<array.length;i++){
            if(array[i] < z){
                z = array[i]
            }
        }
        return z
    }
}

exports.max = function max(array) {
    if (array == undefined || array.length == 0) {
        return 0
    } else {
        let z = 0;
        for(let i = 0;i<array.length;i++){
            if(array[i] > z){
                z = array[i]
            }
        }
        return z
    }

}

exports.avg = function avg(array) {

    if (array == undefined || array.length == 0) {
        return 0
    } else {
        return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / array.length
    }

}

