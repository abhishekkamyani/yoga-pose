const image = document.querySelector("#pose_img");

function image_maker(selectElement) {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const dataSrcValue = selectedOption.getAttribute("data-src");
    console.log(dataSrcValue);
    image.src = dataSrcValue;
}