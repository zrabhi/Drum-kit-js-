const Panels = document.querySelectorAll('.panel');

console.log(Panels); 

function ToggleActive(e)
{
    this.classList.toggle('open');
}

function EventHandler(e)
{
    if (e.propertyName === 'flex' )
        this.classList.toogle('open-active');
    console.log(e.propertyName);
    // console.log(e.propertyName.includes('flex'));
}

Panels.forEach(element => element.addEventListener('click', EventHandler));
Panels.forEach(element => element.addEventListener('mouse', EventHandler));
Panels.forEach(element => element.addEventListener('click', ToggleActive)) ;