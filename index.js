const gradientBtn1 = document.getElementById('btn1');
const gradientBtn2 = document.getElementById('btn2');
const chngPara = document.getElementById('para');
let body = document.body;
let color1 = "#ff7e5f";
let color2 = "#feb47b";


//Resuable Function to Generate Hex Colors
const result = (num) => {
    let finalResult = "#";
    for (let i = 0; i < 6; i++) {
        finalResult += num[Math.floor(Math.random() * num.length)];
    }
    return finalResult;
};


const updateBackground = () => {
    body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    chngPara.innerHTML = `background: linear-gradient(to right, ${color1}, ${color2});`;
};


//Button One Hex Colors
gradientBtn1.addEventListener('click', () => {
    color1 = result("123456789abcdef");
    gradientBtn1.innerHTML = color1;
    gradientBtn1.style.backgroundColor = color1;
    gradientBtn1.style.color = 'white';
    gradientBtn1.style.borderColor = color1;
    chngPara.innerHTML = `background: linear-gradient(to right, ${color1}, ${color2});`;
    updateBackground();
});

//Button Two Hex Colors
gradientBtn2.addEventListener('click', () => {
    color2 = result("123456789abcdef");
    gradientBtn2.innerHTML = color2;
    gradientBtn2.style.backgroundColor = color2;
    gradientBtn2.style.color = 'white';
    gradientBtn2.style.borderColor = color2;
    chngPara.innerHTML = `background: linear-gradient(to right, ${color1}, ${color2});`;
    updateBackground();
});


//Copy Content Code
chngPara.addEventListener('click', () => {
    const text = chngPara.innerText; 
    navigator.clipboard.writeText(text) 
        .then(() => {
            alert('Text copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
});

