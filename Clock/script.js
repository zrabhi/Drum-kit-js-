
const SecondHand = document.querySelector('.sec-hand');
const MinuteHand = document.querySelector('.min-hand');

function SetDate()
{
    const date = new Date();
    const Second = date.getSeconds();
    const Minute = date.getMinutes();
    const Hour = date.getHours();
    const SecRotationDeg = ((Second / 60) * 360) + 90;
    const MinRotationDeg = ((Minute / 60 ) * 360) + 90;
    console.log("degree for seconds", SecRotationDeg);
    // const HourRotationDef =  ((Hour / 60 ) + 360) + 90;
    // SecondHand.style.transform = 
    SecondHand.style.transform = `rotate(${SecRotationDeg}deg)`;
    MinuteHand.style.transform = `rotate(${MinRotationDeg}deg)`;
    console.log("Second ==>", Second);
    console.log("Minute", Minute); 
    console.log("Hour", Hour);
}

setInterval(SetDate, 1000);