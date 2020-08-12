const arr = ['34124', '2345463', '562352', '424112', '85434', '221145', '8543'];

for (let key of arr) {
    if (+key[0] === 2 || +key[0] === 4) {
        console.log(key);
    }
}

// 2

const primeNumber = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
for (let i = 0; i <= primeNumber.length - 1; i++) {
    console.log(primeNumber[i] + ' Делитель этого числа 1 и ' +primeNumber[i])
}
