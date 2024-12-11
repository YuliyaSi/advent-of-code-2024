const teststring = '89010123\n' + '78121874\n' + '87430965\n' + '96549874\n' + '45678903\n' + '32019012\n' + '01329801\n' + '10456732';
const convertToArray = (stringMap) => stringMap.split('\n').map(str => str.split(''));
const testarray = convertToArray(teststring);

const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
];

// const findSymbolOnPos = (num, [x, y], arr) => arr[x][y] === num;

const countTrailScore = (topographicMap) => {
    let score = 0;
    const arrOfStartPoints = topographicMap.reduce((sumArr, curArr, ind) => {
        if (curArr.includes('0')) {
            let start = 0;
            while (start < curArr.length && curArr.slice(start, curArr.length).includes('0')) {
                const indOfZero = curArr.slice(start, curArr.length).indexOf('0') + start;
                sumArr.push([ind, indOfZero]);
                start = indOfZero + 1;
            }
        }
        return sumArr;
    }, [])

    return arrOfStartPoints;
}

console.log(countTrailScore(testarray))
