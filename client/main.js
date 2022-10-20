const supplyPic = () => {
    axios.get("/monkes")
    .then(res => {
        
        const {data} = res
        console.log(data);
        
        let monkeyDisplay = document.getElementById('monkeys');
        
        monkeyDisplay.src = data

        });
};


document.getElementById('randomMonk').addEventListener('click' , supplyPic );

document.getElementById('randomMonk').addEventListener('touchstart' , supplyPic )
