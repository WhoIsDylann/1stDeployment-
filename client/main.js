const supplyPic = () => {
    axios.get("http://localhost:4000/monkes")
    .then(res => {
        
        const {data} = res
        console.log(data);
        
        let monkeyDisplay = document.getElementById('monkeys');

        let monkeImg = document.createElement('img');

        monkeImg.src = data;

        monkeyDisplay.appendChild(monkeImg)

        });
};


document.getElementById('randomMonk').addEventListener('click' , supplyPic );

document.getElementById('randomMonk').addEventListener('touchstart' , supplyPic )