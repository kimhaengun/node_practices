module.exports = {
    sum: function(){
    var sum = 0;
    Array.from(arguments).forEach(function(e){
        sum+=e;
    });
    return sum;
    },
    
    max:function(){
        //제일 작은 값
        var max = Number.MIN_SAFE_INTEGER;
        Array.from(max).forEach(function(e){
            max = e > max ? e : max;
        });
        return max;
    },
    min:function(){
        //제일 작은 값
        var min = Number.MAX_SAFE_INTEGER;
        Array.from(min).forEach(function(e){
            min = e < min ? e : min;
        });
        return min;
    }
}