// Дескриптор
var figure = {
    width: 4
};

Object.defineProperty(figure, "height", { value: "3",   //добавляем свойство height
    configurable: true });                              //со значением 3
                                                        //его можно удалять и менять значения
alert(figure.height); // 3

Object.defineProperty(figure, "area", {         //добавляем свойство area
    get: function() {                           //которое является функцией вычисления прощади
        return this.width * this.height;
    }
});

alert(figure.area); // 12


// Decorator
var word = 'hello';

function show(a) {
    return a;
}

function upLetterDecorator(f) {
    var tag = prompt('Enter tag', '');
    return '<' + tag + '>' + f + '</' + tag + '>'
}

alert(upLetterDecorator(show(word)));


// Объект(ы), который мог бы конвертироваться
var person = {
    name: prompt("Введите Ваше имя"),
    growth: prompt("Введите Ваш рост в метрах"),
    weight: prompt("Введите Ваш вес в килограммах"),
    index: function () {
        return this.weight / (this.growth * this.growth);
    },
    verdict: function () {
        if (this.index() <= 16) {return'Выраженый дефицит массы тела'}
        else if (this.index() < 18.5) {return'Недостаточная масса тела'}
        else if (this.index() < 24.99) {return'Норма'}
        else if (this.index() < 30) {return'Избыточная масса тела(предожирение)'}
        else if (this.index() < 35) {return'Ожиренье первой степени'}
        else if (this.index() < 40) {return'Ожиренье второй степени'}
        else {return'Ожиренье третьей степени (морбидное)'}
    },
    toString: function () {
        return this.name + ' у Вас ' + this.verdict();
    },
    valueOf: function (){
        return this.growth;
    },
    toJson: function(){
        return{
            "name": this.name,
            "growth": this.growth,
            "weight": this.weight
        }

    }
};

person.index();
alert(String(person));
alert(Number(person));
alert(JSON.stringify(person));