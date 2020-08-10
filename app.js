// 1)
// a
let lang = prompt('Выберете язык. en или ru')
 if (lang === 'ru' || lang === 'en') {
    if (lang === 'en') {
        alert('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday')
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday')
    } else {
        alert('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье')
        console.log('Понедельник, вторник, среда, пятница, суббота, воскресенье')
    }
} else {
    alert(`Нужно было быть внимательнее... Написано же en или ru, а ты ввел ${lang}`)
}
// b
lang = prompt('Выберете язык. en или ru')
if (lang === 'ru' || lang === 'en') {
    switch (lang) {
        case "en":
            alert('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday')
            console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday')
            break
        case "ru":
            alert('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье')
            console.log('Понедельник, вторник, среда, пятница, суббота, воскресенье')
            break
    }
}else {
    alert(`Нужно было быть внимательнее... Написано же en или ru, а ты ввел ${lang}`)
}
// c
let weekday = {
    ru: 'Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье',
    en: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'
}
lang = prompt('Выберете язык. en или ru')

alert(weekday[lang])
// 2)

let namePerson = prompt('Введите имя')
let message = (namePerson === 'Артем') ? 'Директор' :
    (namePerson === 'Максим') ? 'Преподаватель' : 'Студент'
console.log(message);
