

// function PlayEvent(e)
// {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     if (!audio) return;

//     key.classList.add('playing');
//     // audio.currentTime = 0;
//     audio.play();
    
// };ds
window.addEventListener('keydown', (e) =>
{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    // audio.currentTime = 0;
    audio.play();
    // key.classList.remove('playinga');
    // key.classList.add('trans');
});



