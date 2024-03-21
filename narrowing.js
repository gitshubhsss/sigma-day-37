function myFunction(value) {
    if (typeof value === 'string') {
        // Value is treated as string here
        console.log(value.toUpperCase());
    }
    else {
        // Value is treated as number here
        console.log(value.toFixed(2));
    }
}
myFunction("GeeksforGeeks");
myFunction(3.14159);
