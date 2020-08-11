function thirtyCharacters(str) {
    if (typeof str === "string") {
        let strNotSpace = str.trim()
        if (str.length >= 30) {
            console.log(strNotSpace.substr(0, 30) + '...');
        } else { console.log(strNotSpace) }
    } else {
        alert('Это не строка')
    }
}
