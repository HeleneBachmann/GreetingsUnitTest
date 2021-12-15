function greet(name){
    if (name === null || name === undefined) 
        return 'Hello There!'; 
    if (typeof name === typeof []){
        if (name.length > 0) {
            let name = '';
            name.forEach((elm) => {
                // Fat arrows used for an anonymous function that is only used once
                names += ', ' + elm;
            });
            return 'Hello ' + names;
        }
        return 'Hello There!';
    }
    if (name === name.toUpperCase()) {
        return 'HELLO ' + name + '!';
    }
    return 'Hello, ' + name;
};

let name = "Elizabeth";