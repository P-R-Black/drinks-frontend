
import imgUrlDefault from '../src/assets/pexels-rachel-default.jpg';
import imgUrlLime from '../src/assets/pexels-lisa-f.jpg'
import imgUrlOrange from '../src/assets/pexels-j-lewis.jpg'
import imgUrlLemon from '../src/assets/pexels-lukas.jpg'
import imgUrlColaUp from '../src/assets/pexels-cola-up.jpg'
// import imgUrlColaDown from '../src/assets/pexels-cola-down.jpg'
import imgUrlBloodOrange from '../src/assets/pexels-blood-orange-wedge.jpg'
import imgUrlRedLemonSlice from '../src/assets/pexels-red-lemon-slice.jpg'
import imgUrlChampagneBot from '../src/assets/pexels-champagne-bottles.jpg'
import imgUrlMojito from '../src/assets/pexels-lime-mint-drinks.jpg'
import imgUrlScotchTopDown from '../src/assets/pexels-scotch-topdown.jpg'
import imgUrlOrangeSlices from '../src/assets/pexels-orange-slices.jpg'
import imgUrlWhiteWine from '../src/assets/pexels-white-wine.jpg'
import imgUrlRoseWine from '../src/assets/pexels-polina-rose-over.jpg'
import imgUrlRumGold from '../src/assets/pexels-eva-gold.jpg'

let picChoiceScotchTopDown = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlScotchTopDown})`;
let picChoiceBloodOrange = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlBloodOrange})`;
let picChoiceLime = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlLime})`;
let picChoiceLemon = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlLemon})`;
let picChoiceRedLemon = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlRedLemonSlice})`;
let picChoiceOrange = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlOrange})`;
let picChoiceOrangeSlice = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlOrangeSlices})`;
let picImageRoseWine = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlRoseWine})`;
let picImageColaUp = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlColaUp})`;
let picImageMojito = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlMojito})`;
let picImageRumGold = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlRumGold})`;
let picImageWhiteWine = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlWhiteWine})`;
let picImageChampagneBottle = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlChampagneBot})`;
let picImageDefault = `radial-gradient(#2e2c7c68, #4a5ecb5f), url(${imgUrlDefault})`;


let gin = [picChoiceLime, picChoiceLemon, picChoiceBloodOrange, picChoiceRedLemon];
let rum = [picImageColaUp, picImageMojito];
let tequila = [picChoiceLime, picChoiceOrange, picChoiceLemon];
let whiteWine = [picImageWhiteWine, picImageChampagneBottle];
let sloeGin = [picChoiceBloodOrange, picChoiceRedLemon];

export const BackgroundPics = (alc) => {

    let new_alc = alc

    let backgroundImage;
    switch (new_alc) {
        case "absinthe" || "Absinthe":
            backgroundImage = picChoiceLemon;
            break;
        case "amaretto" || "Amaretto":
            backgroundImage = picChoiceScotchTopDown;
            break;
        case "aquavit" || "Aquavit":
            backgroundImage = picChoiceBloodOrange;
            break;
        case "bourbon" || "Bourbon":
            backgroundImage = picChoiceScotchTopDown;
            break;
        case "brandy" || "Brandy":
            backgroundImage = picChoiceScotchTopDown;
            break;
        case "cachaca" || "Cachaca":
            backgroundImage = picChoiceLime;
            break;
        case "champagne" || "Champagne":
            backgroundImage = picImageChampagneBottle;
            break;
        case "cognac" || "Cognac":
            backgroundImage = picChoiceScotchTopDown;
            break;
        case "creme-de-menthe" || "Creme-de-menthe":
            backgroundImage = picChoiceScotchTopDown;
            break;
        case "gin" || "Gin":
            backgroundImage = gin[Math.floor(Math.random() * gin.length)];
            break;
        case "mezcal" || "Mezcal":
            backgroundImage = picChoiceOrangeSlice;
            break;
        case "non-alcoholic" || "Non-Alcoholic":
            backgroundImage = picImageDefault; // update 
            break;
        case "rose-wine-aperitif" || "Rose-Wine-Aperitif":
            backgroundImage = picImageRoseWine;
            break;
        case "rum" || "Rum":
            backgroundImage = rum[Math.floor(Math.random() * rum.length)];
            break;
        case "rum-dark" || "Rum-Dark":
            backgroundImage = picImageColaUp;
            break;
        case "rum-gold" || "Rum-Gold":
            backgroundImage = picImageRumGold;
            break;
        case "rum-light" || "Rum-Light":
            backgroundImage = rum[Math.floor(Math.random() * rum.length)];
            break;
        case "rum-spiced" || "Rum-Spiced":
            backgroundImage = picImageRumGold;
            break;
        case "scotch" || "Scotch":
            backgroundImage = picChoiceScotchTopDown;
            break;
        case "sloe-gin" || "Sloe-Gin":
            backgroundImage = sloeGin[Math.floor(Math.random() * sloeGin.length)];
            break;
        case "sparkling-white-wine" || "Sparkling-White-Wine":
            backgroundImage = whiteWine[Math.floor(Math.random() * whiteWine.length)];
            break;
        case "tequila" || "Tequila":
            backgroundImage = tequila[Math.floor(Math.random() * tequila.length)];
            break;
        case "vermouth" || "Vermouth":
            backgroundImage = picChoiceScotchTopDown;
            break;
        case "vodka" || "Vodka":
            backgroundImage = tequila[Math.floor(Math.random() * tequila.length)];
            break;
        case "whiskey" || "Whiskey":
            backgroundImage = picChoiceScotchTopDown;
            break;
        case "white-wine-aperitif" || "White-Wine-Aperitif":
            backgroundImage = whiteWine[Math.floor(Math.random() * whiteWine.length)];
            break;
        default:
            backgroundImage = picImageDefault;
    }
    return backgroundImage

}
