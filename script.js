function BMI(weight = 90, height = 180) {
    return weight / (height * height)
}
let result = BMI(60, 180)
console.log(result)

console.log(BMT())
console.log(BMT())
console.log(BMT())
console.log(BMT())
console.log(BMT())

function Status(bmi) {
    if (bmi < 18.5) {
        return "لديك نقص في الوزنء"
    } else if (bmi >= 18.5 && bmi < 25) {
        return "وزنك صحي"
    } else if (bmi >= 25) {
        return "لديك زيادة في الوزن"
    }
}

function calculate () {
    let weight = document.getElementById("weight").value
    let height  = document.getElementById("height").value

    let bmi = BMI(weight, height)
    let desc = Status(bmi)
    let div = document.getElementById("result")
    if (bmi < 18.5) {
        div.style.color = "orange"
    } else if (bmi >= 18.5 && bmi < 25) {
        div.style.color = "green"
    } else if (bmi >= 25) {
        div.style.color = "red"
    }
    div.innerText = bmi + " == " + desc
}