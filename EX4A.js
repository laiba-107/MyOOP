function pipe(...funcs) {
    return function (initialValue) {
        return funcs.reduce((acc, func) => func(acc), initialValue);
    };
}

// Example functions
function addOne(x) {
    return x + 1;
}

function multiplyByTwo(x) {
    return x * 2;
}

function subtractThree(x) {
    return x - 3;
}

// Create a pipeline
const pipeline = pipe(addOne, multiplyByTwo, subtractThree);

// Execute the pipeline
console.log(pipeline(5));  // Output: 9 ((5 + 1) * 2 - 3)
<script src="EX5A.html">Next</script>

