function greet(name){
    if (name === null || name == undefined) 
        return 'Hello There!'; 
    if (typeof name === typeof []){
        if (name.length > 0) {
            let name = '';
            name.forEach((elm) => {
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