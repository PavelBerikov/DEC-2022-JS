/*<!-- - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/
function User  (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User(1, 'Pasha', 'Pavlov', 'asdas@gmail', 123456345),
    new User(2, 'Sveta', 'Ivlov', 'dfggd@gmail', 1231556234),
    new User(3, 'Evgen', 'Dfold', 'cvbn@gmail', 3213456456),
    new User(4, 'Oleg', 'Pavlov', 'asdas@gmail', 1234564567),
    new User(5, 'Oksana', 'Ivlov', 'dfggd@gmail', 87643234567),
    new User(6, 'Sergey', 'Pavlov', 'asdas@gmail', 3456787654),
    new User(7, 'Katya', 'Ivlov', 'dfggd@gmail', 3456765543),
    new User(8, 'Pasha', 'Pavlov', 'asdas@gmail', 345676543),
    new User(9, 'Sasha', 'Ivlov', 'dfggd@gmail', 456765567),
    new User(10, 'Semen', 'Pavlov', 'asdas@gmail', 34567898),



];
console.log(users)
/*- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)*/
console.log(users.filter(value => value.id % 2 === 0));
/*- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)*/
console.log(users.sort((a, b) => a.id - b.id ))
/*- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client*/

{
    class Clients {
        constructor(id, name, surname , email, phone, order) {
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
            this.order = order;
        }
    }
    let client1 = new Clients(12, 'Pash', 'dqwdwq', 'dqwdwqd@', '132123213', ['dqwdwq', 'dwqdwqd', 'dqwdwq']);
    console.log(client1)
    let asd = [
        new Clients(674, 'Pasha', 'Ivaniv', 'juytrd@gmail.com', '8765432', ['яблоки', 'молоко', 'апельсин', 'хлеб', 'вода', 'творог']),
        new Clients(345, 'Sasha', 'Petrov', 'jytrdfgh@gmail.com', '3456713', ['вода', 'творог', 'сметана']),
        new Clients(765, 'Visha', 'Shevchenko', 'kjuytrdfg@gmail.com', '34563213', ['яблоки', 'молоко', 'апельсин']),
        new Clients(876, 'Sveta', 'Gumilev', 'dqrthg@gmail.com', '17654654', ['вода', 'творог']),
        new Clients(355, 'Petya', 'Levada', 'dqwdwqd@gmail.com', '19876543', ['апельсин', 'хлеб', 'вода', 'творог', 'сметана']),
        new Clients(654, 'Masha', 'Kurt', 'ertghgfder@gmail.com', '123456213', ['апельсин', 'хлеб','сметана']),
        new Clients(567, 'Gena', 'Nikityk', 'ertyhg@gmail.com', '9876543', ['яблоки', 'молоко']),
        new Clients(136, 'Lesha', 'Ivanov', 'drtyujhg@gmail.com', '654323213', ['апельсин', 'хлеб', 'вода']),
        new Clients(590, 'Nastya', 'Sokolov', 'ftyuiolm@gmail.com', '23452123213', ['яблоки', 'молоко', 'апельсин', 'хлеб', 'вода', 'творог', 'сметана']),
        new Clients(234, 'Lena', 'Lena', 'dqwdwqd@gmail.com', '6543543456', ['хлеб'])
    ];
    console.log(asd)
    /*
- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)*/
    console.log(asd.sort((a, b) => a.order.length - b.order.length  ))
}
/*- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
 drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
 info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
 increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
 changeYear (newValue) - змінює рік випуску на значення newValue
addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/
{
    function Cars(model, manufacturer, year, maxSpeed, engineСapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineСapacity = engineСapacity;
        this.drivers = [];
        this.drive = function () {
            return `їдемо зі швидкістю ${this.maxSpeed} на годину`
        };
        this.info = function () {
            console.log(`Model - ${this.model}`);
            console.log(`Manufacturer - ${this.manufacturer}`);
            console.log(`Year - ${this.year}`);
            console.log(`Max speed - ${this.maxSpeed}`);
            console.log(`Engine Capacity - ${this.engineСapacity}`);

        };
        this.increaseMaxSpeed = function (newSpeed) {
            return this.maxSpeed + newSpeed
        };
        this.changeYear = function (num) {
            return this.year = num
        };
        this.addDriver = function (arr) {
            return this.drivers.push(arr)

        }
    }
    let car = new Cars('x5', 'bmv', '2020', 300, '3.8');
    console.log(car.drive());
    console.log(car.info());
    console.log(car.increaseMaxSpeed(100));
    console.log(car.changeYear(3000));
    console.log(car.addDriver())
}
/*- (Те саме, тільки через клас)*/
{
    function Driver(name, age, gender, exp) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.exp = exp;

    }



    let driver1 = new Driver('Pasha', 33, 'male', '10 years');

    class Cars {
        constructor(model, manufacturer, year, maxSpeed, engineСapacity) {
            this.model = model;
            this.manufacturer = manufacturer;
            this.year = year;
            this.maxSpeed = maxSpeed;
            this.engineСapacity = engineСapacity;
            this.drivers = []
        }

        drive() {
            return `їдемо зі швидкістю ${this.maxSpeed} на годину`
        }

        info() {

            console.log(`Model - ${this.model}`);
            console.log(`Manufacturer - ${this.manufacturer}`);
            console.log(`Year - ${this.year}`);
            console.log(`Max speed - ${this.maxSpeed}`);
            console.log(`Engine Capacity - ${this.engineСapacity}`);
        }

        increaseMaxSpeed(newSpeed) {
            return this.maxSpeed + newSpeed
        }

        changeYear(num) {
            return this.year = num
        }

        addDriver(arr) {
            return this.drivers.push(arr)

        }

    }

    let car1 = new Cars('x5', 'bmw', 2020, 300, 3.8)
    console.log(car1);
    console.log(car1.drive())
    console.log(car1.info())
    console.log(car1.increaseMaxSpeed(100));
    console.log(car1.changeYear(2000));
    console.log(car1.addDriver(driver1))
}
/*
-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбек*/
{
    let pops = []
    class Pop {
        constructor(name, age, size) {
            this.name = name;
            this.age = age;
            this.size = size;
        }
    };
    let pop1 = new Pop('sasha', 23, 35);
    let pop2 = new Pop('alya', 22, 35);
    let pop3 = new Pop('misha', 21, 39);
    let pop4 = new Pop('lena', 20, 39);
    let pop5 = new Pop('sveta', 29, 38);
    let pop6 = new Pop('luda', 19, 38);
    let pop7 = new Pop('srgey', 18, 37);
    let pop8 = new Pop('vibe', 23, 37);
    let pop9 = new Pop('lana', 24, 36);
    let pop10 = new Pop('vitya', 25, 36);
    console.log()
    let pusher = (...arr) => {
        return pops.push(...arr);
    }
    pusher(pop1,pop2, pop3, pop4, pop5, pop6, pop7, pop8, pop9, pop10)
    console.log(pops)
    class Prince {
        constructor(name, age, found) {
            this.name = name;
            this.age = age;
            this.found = found;
        }
        find(arr) {
            for (let item of arr) {
                if (item.size === this.found) {
                    return item
                }
            }
        }
    }
    let pri = new Prince('Pasha', 25, 36)
    console.log(pri.find(pops))
    console.log(pops.find(value => value.size === 36))
}