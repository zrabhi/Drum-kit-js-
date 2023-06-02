const Inputs = document.querySelectorAll('.controls input');





Inputs.forEach(input => input.addEventListener('mousemove' || 'change', () =>
{
   const value = input.dataset.sizing || 10;
   document.documentElement.style.setProperty(`--${input.name}`, input.value + value);
   console.log(value); 
}))