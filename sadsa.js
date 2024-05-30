// alert('Я JavaScript!')

// let name = 'Иван';
// let admin = name;
// alert(admin);

// let name = 'Ilya';
// alert(`hello ${1}`);
// alert(`hello ${'name'}`)
// alert(`hello ${name}`)

// let name;
// name = prompt('Как тебя зовут?');
// alert (name);

// let a = 1;
// let b = 1;
// let c = ++a;
// let d = b++; 
// alert (a)
// alert (b)
// alert (c)
// alert (d)

// let a = 2;
// let x = 1 + (a *= 2);
// alert(a);
// alert(x);

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// a = Number(a);
// b = Number(b);
// alert(a + b);

// a = 7 > 5
// b = "стол" > "стул"
// c = "4" > "52"
// d = undefined == null
// e = undefined === null
// f = null == "\n0\n"
// g = null === +"\n0\n"
// alert(a)
// alert(b)
// alert(c)
// alert(d)
// alert(e)
// alert(f)
// alert(g)

// if ("0") {
//     alert( 'Привет' );
// }

// let a;
// a = prompt('Какое "официальное" название JavaScript');
// if (a == 'ECMAScript') {
//     alert('Верно');
// } else {
//     alert('Не знаете? ECMAScript');
// }

// let a;
// a = prompt('Введите число')
// if (a > 0) {
//     alert('1')
// } else if (a < 0){
//     alert('-1')
// } else {
//     alert('0')
// }

// let a;
// a = prompt('Введи первое число')
// a = Number(a)
// let b;
// b = prompt('Введи второе число')
// b = Number(b)
// let result = (a + b < 4) ? 'Мало' : 'Много';
// alert(result)

// let login;
// login = prompt('Введите Логин');
// let message = (login == 'Сотрудник') ? 'Привет' : 
//     (login == 'Директор') ? 'Здравствуйте' :
//     (login == '') ? 'Нет логина' : '';
// alert(message)

// alert( null || 4 || undefined );

// alert( alert(1) || 2 || alert(3) );

// alert( 1 && null && 2 );

// alert( alert(1) && alert(2) );

// alert( null || 2 && 3 || 4 );

// let value = NaN;
// value &&= 10;
// value ||= 20;
// value &&= 30;
// value ||= 40;
// alert(value);

// let pers;
// let age;
// age = prompt('Введи число')
// if (age >= 14 && age <= 90){
//     pers = 'ДА';
// } else {
//     pers = 'НЕТ';
// }
// alert(pers)

// let pers;
// let age;
// age = prompt('Введи число')
// if (age >=! 17 && age <=! 99){
//     pers = 'ДА';
// } else {
//     pers = 'НЕТ';
// }
// alert(pers)

// if (-1 || 0) alert( 'first' );//да
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );//да 

// let message;
// let message2;
// let login;
// login = prompt('Введите логин');
// if (login == ''){
//     location.reload();
// }else if (login == 'Админ'){
//     let password;
//     password = prompt('Пароль');
//     if (password == 'Я Главный'){
//         message2 = 'Здравствуйте';
//         alert(message2);
//     } else if (password == 'Отмена'){
//         message2 = 'Отменено';
//         alert(message2); 
//     } else {
//         message2 = 'Неверный пароль';
//         alert(message2);
//     }
// } else if (login == 'Отмена'){
//     message = 'Отменено';
//     alert(message);
// } else {
//     message = 'Я вас не знаю';
//     alert(message);
// -+