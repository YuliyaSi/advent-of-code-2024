let _arr = require('lodash/array');

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

// console.log(countStones(teststring))
// console.log(countStones(taskstring))

const countBigStones = (str, count = 75) => {
    let stoneCounts = {};
    str.split(' ').forEach(stone => {
        stoneCounts[stone] = (stoneCounts[stone] || 0) + 1;
    });

    for (let iteration = 0; iteration < count; iteration++) {
        const newStoneCounts = {};

        for (const [stoneStr, quantity] of Object.entries(stoneCounts)) {
            const stoneNum = Number(stoneStr);

            if (stoneNum === 0) {
                newStoneCounts['1'] = (newStoneCounts['1'] || 0) + quantity;
            } else if (stoneStr.length % 2 === 0) {
                const half1 = parseInt(stoneStr.slice(0, stoneStr.length / 2));
                const half2 = parseInt(stoneStr.slice(stoneStr.length / 2));

                newStoneCounts[half1] = (newStoneCounts[half1] || 0) + quantity;
                newStoneCounts[half2] = (newStoneCounts[half2] || 0) + quantity;
            } else {
                const newStone = String(stoneNum * 2024);
                newStoneCounts[newStone] = (newStoneCounts[newStone] || 0) + quantity;
            }
        }

        stoneCounts = newStoneCounts;
    }

    return Object.values(stoneCounts).reduce((sum, count) => sum + count, 0);
};

console.log(countBigStones(taskstring, 75));


