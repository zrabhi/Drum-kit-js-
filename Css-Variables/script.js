const Inputs = document.querySelectorAll('.controls input');

Inputs.forEach(input => input.addEventListener( 'change' || 'mousemove', () =>
{
   document.documentElement.style.setProperty(`--${input.name}`,
         (input.value + (input.dataset.sizing || '' )));
}))