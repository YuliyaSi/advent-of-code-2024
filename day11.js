const teststring = '125 17'
const taskstring = '30 71441 3784 580926 2 8122942 0 291'

const countStones = ( str, count = 25 ) => {
    if (count === 0) return str.split(' ').length;

    const arrOfStones = str.split(' ');
    const newStones = [];

    for (let i = 0; i < arrOfStones.length; i++) {
        const stoneStr = arrOfStones[i];
        const stoneNum = Number(stoneStr);
        if (stoneNum === 0) {
            newStones.push('1');
        } else if (stoneStr.length % 2 === 0) {
            newStones.push(parseInt(stoneStr.slice(0, stoneStr.length / 2)));
            newStones.push(parseInt(stoneStr.slice(stoneStr.length / 2)));
        } else {
            newStones.push(`${stoneNum * 2024}`);
        }
    }

    return countStones(newStones.join(' '), count - 1);
};

console.log(countStones(teststring))
console.log(countStones(taskstring))
