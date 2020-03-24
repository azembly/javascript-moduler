let myFunctions = (function() {
    
    let privateVariable = 42;

    return {
        addNumbers: function(x,y){
            return x + y;
        },
        theAnswerToLifeEtc: function () {
            console.log(privateVariable);
        }
    }

})();