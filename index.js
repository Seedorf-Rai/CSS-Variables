const getColor = document.querySelector('#color');
const root = document.querySelector(':root');
getColor.setAttribute('colorpick-eyedropper-active', false)
console.log(getColor.attributes);


getColor.addEventListener('change', function (e) {
    var newColor = e.target.value;
    root.style.setProperty('--color', newColor);
})

const getSpacing = document.querySelector('#spacing');
const img = document.querySelector('img')
console.log(getSpacing);
spacing.addEventListener('change', (e) => {
    var value = e.target.value;
    img.style.setProperty('--l', `${value}%`);
})

const blur = document.querySelector('#blur')
blur.addEventListener('change', (e) => {
   var x = e.target.value;
   img.style.setProperty('--b',`${8-x}px`)
})