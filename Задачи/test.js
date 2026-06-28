const age = 0;
function ageValue(age){
    if(age < 18){
        console.log("Возраст не должен быть меньше 18 лет")
    }
    else if(age > 65){
        console.log("Возраст не должен быть больше 65 лет")
    }
    else{
        console.log("Ваш возраст: " + age)
    }
}

ageValue(18);
ageValue(17);
ageValue(66);