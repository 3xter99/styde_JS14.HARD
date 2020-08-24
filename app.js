let change = document.querySelector('#change')
let wrapper = document.querySelector('.wrapper')
let text = document.querySelector('.text')

change.addEventListener('click', () => {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    let randomNumber = getRandomInt(1, 1000000000).toString(16)

    text.textContent = `#${randomNumber}`
    wrapper.style.backgroundColor = `#${randomNumber}`

})
