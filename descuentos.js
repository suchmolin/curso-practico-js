// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const inputDiscount = document.getElementById("inputDiscount");

    const price = inputPrice.value;
    const discount = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(price,discount);

    const resultP = document.getElementById("resultPrice ");

    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;

}