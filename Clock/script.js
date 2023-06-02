
const SecondHand = document.querySelector('.sec-hand');

function SetDate()
{
    const date = new Date();
    const Second = date.getSeconds();
    const Minute = date.getMinutes();
    const Hour = date.getHours();
    const SecondRotationDeg = ((Second / 60) * 360) + 90;
    // SecondHand.style.transform = 
    SecondHand.style.transform = `rotate(${SecondRotationDeg}deg)`;
    console.log("Second ==>", Second);
    console.log("Minute", Minute); 
    console.log("Hour", Hour);
}

setInterval(SetDate, 1000);