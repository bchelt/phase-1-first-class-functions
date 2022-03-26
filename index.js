function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    const namedFunction = () => console.log('Named function');
    return namedFunction;
}

function returnsAnAnonymousFunction() {
    return () => console.log('Anonymous Function');
}