function getComputerChoice() {
    const maxNum = Math.ceil(4);
    const minNum = Math.floor(1);
    const randomNum = Math.floor(Math.random() * (maxNum - minNum) + minNum);
    if (randomNum === 1) {
        console.log('Rock!')
    }
    else if (randomNum === 2) {
        console.log('Paper!')
    }

    else {
        console.log('Scissors!')
    }
};

getComputerChoice()