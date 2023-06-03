const Inputs = document.querySelectorAll('.controls input');
let baseEl = document.getElementById('base');
const  baseColor = document.documentElement;
console.log(baseColor);


const Color = baseColor.style.getPropertyValue("--base");
console.log(Color);

Inputs.forEach(input => input.addEventListener( 'mousemove', () =>
{
   document.documentElement.style.setProperty(`--${input.name}`,
      (input.value + (input.dataset.sizing || '' )));
   console.log(input.value + (input.dataset.sizing || '' ));
}))