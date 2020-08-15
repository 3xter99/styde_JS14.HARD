let week = ['понедельник','втоник','среда','четверг','пятница','суббота','воскресенье']
let list = document.querySelector('.list')
let data = new Date()
let weekDay = data.getDay() - 1
console.log(weekDay);


week.forEach((item, index) => {
    let li = document.createElement('li')
    if (item === 'суббота' || item === 'воскресенье' ) {
        li.style.fontStyle = 'italic'
    }
    if (index === weekDay) {
        li.style.fontWeight = 'bold'
    }
    li.textContent = item
    list.appendChild(li)
})



