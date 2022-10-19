const supplyPic = () => {
    axios.get("/monkes")
    .then(res => {
        
        const {data} = res
        console.log(data);
        
        let monkeyDisplay = document.getElementById('monkeys');

        let monkeImg = document.createElement('img');

        monkeImg.src = data;

        monkeyDisplay.src = monkeImg.src

        });
};


document.getElementById('randomMonk').addEventListener('click' , supplyPic );

document.getElementById('randomMonk').addEventListener('touchstart' , supplyPic )
