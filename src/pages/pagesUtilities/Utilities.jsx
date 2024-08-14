import slugify from 'react-slugify';


export const convertAlcoholNameUtils = (alcohol, arr) => {

    console.log('Utilities alcohol', alcohol)
    let convertedName;

    let alcoholConvert = alcohol.toLowerCase().split('-').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
    console.log('Utilities: alcoholConvert', alcoholConvert)
    if (findParenthesis(alcoholConvert, arr)) {
        console.log('Utilities: convertedName 1', convertedName)
        return convertText(alcoholConvert)

    } else {
        console.log('Utilities: convertedName 2', convertedName)
        return alcoholConvert

    }

}



// gets base alcohol as it appears from API

const findParenthesis = (text, arr) => {
    console.log('Utilities', 'text', text, 'arr', arr)
    let findAlcohol = arr.filter((as) => as.base_alcohol[0] === text.toLowerCase())
        .map((fd) => fd.base_alcohol)
    console.log('Utilities findAlcohol', findAlcohol)
    findAlcohol = findAlcohol.length > 1 ? findAlcohol[0] : findAlcohol
    var regExp = /\(([^)]+)\)/;
    if (regExp.test(findAlcohol)) {
        return true
    } else {
        return false
    }
}

export const convertText = (text, arr) => {
    console.log('Utilities:  convertText Function', text, 'arr', arr)

    let needsToBeConverted = slugify(text)
    console.log('needsToBeConverted', needsToBeConverted)

    let findAlcohol = arr.filter((as) => needsToBeConverted === slugify(as.base_alcohol) ? as.base_alcohol : "")
    console.log('findAlcohol', findAlcohol)

    let finalText = findAlcohol.map((fa) => fa.base_alcohol)
    console.log('finalText', finalText)

    let newFinal = finalText.map(function (word) {
        return word !== "De" ? word.base_alcohol : word.replace('De', 'de') + word.slice(1)
    }).join(' ')
    console.log('newFinal', newFinal)
    return finalText;
}





