const matrixForTest = [
    ['.', '.', '.', '.', '#', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '#'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '#', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '#', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '#', '.', '.', '^', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '#', '.'],
    ['#', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '#', '.', '.', '.'],
];

const changedKey = (key) => {
    switch (key) {
        case '^':
            return '>'
        case '>':
            return 'v'
        case 'v':
            return '<'
        case '<':
            return '^'
        default:
            return null
    }
}
const mapping = new Map();
mapping.set('^', [-1, 0]);
mapping.set('>', [0, 1]);
mapping.set('v', [1, 0]);
mapping.set('<', [0, -1]);

const countUniquePosition = (matrix) => {
    const uniquesSet = new Set();

    const findPosition = () => {
        let key, pos;
        for (let i = 0; i < matrix.length; i++) {
            const row = matrix[i];
            for (let j = 0; j < row.length; j++) {
                const col = row[j];
                if (['^', '>', 'v', '<'].includes(col)) {
                    key = col;
                    pos = [i, j];
                    addPositionToUniq(pos);
                    break;
                }
            }
        }

        return { key, pos }
    }
    const addPositionToUniq = ([x, y]) => uniquesSet.add(`${x},${y}`);

    const countNextPosition = (start) => {
        const way = mapping.get(start.key);
        const [point1, point2] = [start.pos[0] + way[0], start.pos[1] + way[1]];
        const shouldStop =
            point1 < 0 ||
            point2 < 0 ||
            point1 === matrix.length ||
            point2 === matrix[point1].length;
        if (shouldStop) return 'stop';

        const shouldChangeWay = matrix[point1][point2] === '#';

        if (shouldChangeWay) {
            const newKey = changedKey(start.key);
            return countNextPosition({ ...start, key: newKey })
        } else {
            addPositionToUniq([point1, point2]);
            return {...start, pos: [point1, point2]}
        }

    }

    let position = findPosition();

    while (countNextPosition(position) !== 'stop') {
        position = countNextPosition(position);
    }

    return uniquesSet.size
}

// console.log(countUniquePosition(matrixForTest));

const strMatrix = '.#..#......................#........#........................................#.............#......#...............#...............\n' + '.......#...........#........................#..............#.....#......#..##............#.....#.....................##...........\n' + '.#.....#........#.##..#.............#...........#................#............#.#.........#.....................#......#..........\n' + '...........#...#.#.................................#.....................#............#.....#.#................#..#...............\n' + '..................................................................................#...............................................\n' + '..................#....................#.................#.........#..#.................#...........#...................#.........\n' + '.......#......#................#.......#............................#.................#.........................#...#........#....\n' + '................................#..............................................................#.........#.........#..............\n' + '.......................................................#............#......#........#.#...................#............#..........\n' + '.....#......#..............................................#..............................................#.......................\n' + '......#..........................................................................................#................#...............\n' + '............................#..................#............#..#.#..............#..........#......................................\n' + '......#..........................#...................#..........#....#.........................#.......................#....#..#..\n' + '..................................#..........#....................................................................#........#......\n' + '..#.................................#..................................................#......................#...................\n' + '.....#............#..................#......#...................................#.#........#.#......#........#....................\n' + '........#......................#.....#...#.##................................#......#.............................................\n' + '...........#.........#...............................................................................#............................\n' + '..................................#...##...............................#.............#.........................................##.\n' + '..........................#.#..#......................................#........#..............................#...................\n' + '......#...........###..#....#........................................................................................#............\n' + '..............#.....................................................................#......##.............#.......................\n' + '.................................#...................#.........#..............................................#...........#.......\n' + '....................#..#...................................................#................................#........#............\n' + '........................................#.#.#..................#....................#.....#.................#.....................\n' + '.........................#....#.....#.................##...............................................#.......#...#..............\n' + '..#.........................#....................#.........................#..............................#...................#...\n' + '..................##....#..#..#.#.................................................................#...............................\n' + '..............#........................................................#.............................#......#.....................\n' + '.................#...........#........................#......#..........##....................#.................................#.\n' + '..........................#.............................................#..#.................................#.........#...#......\n' + '..#..................##.....................................................#.....................#.......#.....#.................\n' + '....#.........................................#..................#.#.........................#.......................#............\n' + '...#.....#.#..............................................................#................#......................#...#........#..\n' + '.............................#..#......#.....................................................##...................................\n' + '...........#......................#....#.........#........................#......................................................#\n' + '............#.............................................#.................................#....#................................\n' + '..............................................................#.............#................#.........#.........................#\n' + '..........................................#....#........#......................#.....#.............#..............................\n' + '..#..#.............#...............................................#.....................................................#........\n' + '................................................................................#.............#...................................\n' + '...............................................#.......................#................#............#....................#.#.....\n' + '.......................#.............................#.#..................#...#....#.................................#...#.....#..\n' + '.......................#...........................#.........................................#.........#.........................#\n' + '...#.........#.....#..........................................#...................................................................\n' + '..........#..#...#...#........................#..........#..........................................#......#.........#............\n' + '...............#............................#.#...................##.....................................................#........\n' + '.........................................................#....................#........................#.........#....##....#...#.\n' + '......................................#.#................................................#........................#...............\n' + '..........#.............................................................#..#..#..............................#...#...#.#..........\n' + '.........#.....................................................................................#...........#..#......#..........#.\n' + '............................#....................#..............#...#.............................................................\n' + '...........................................................#........#......................#.................................#....\n' + '.........#..................#.........#.......#...............................#................#.............#...........#........\n' + '............................#.........#...........................................................................................\n' + '................................#...........#.......................................#..........#.#.....#..........................\n' + '..........................................#.................................................................................#.....\n' + '..............#...............................................#...................................................................\n' + '...#....#.....................#..........#..#......................#..............................................................\n' + '.......................#..........#.................................................#......#.............#........#....#..........\n' + '.........................................................................#.#......................................#...............\n' + '..........................................#.......................#...............................................#.........#...#.\n' + '............................#.......................................................#...#.........#..#...##........#..............\n' + '...........................................................................#..............#..........#.............#..............\n' + '#............#..#...#..#........#....................#...........#..#.........................................#..........#........\n' + '...........................................................................#......#..^.........#.........#........................\n' + '......#............................#.............................................................................................#\n' + '......................#.....#.......................................................#........................#..........#.........\n' + '................#....#.......#.............................#..............#....................#....#....................#........\n' + '......#...................................#..................................................................#....................\n' + '.....#..............#.#...........................................................#.................#.........#......#........#...\n' + '..#..#..#..#........#...........#...........#....##...........#.....................#.............................................\n' + '......................##..........................................................................................................\n' + '...........#............#.........................................................#.....#.....#....................#..............\n' + '#.............#..........#...............#..#.......................................#..............................#..............\n' + '#.......................................#........#....#.......................................................#..#.............#..\n' + '.......................#...#.....#..#...........................#...........#.........................#...#...#................#..\n' + '#...............................................................#........................................#.....................#..\n' + '..#.....................#............................##..........#..................##...#.....................................#..\n' + '.......#...................##..........................................#........#.................................................\n' + '.........................................................#............................................#...............##..........\n' + '.......................#......#..............................................................................................#....\n' + '...........#.......................................#.................................#..........#.............#..................#\n' + '....#.............#......#............................#........................#...................#......#.....#..........#......\n' + '.................................................................#................................#...............................\n' + '..........................................................#.......................#...#...........................................\n' + '.#............#...........................................#............................#..............................#...#.#.....\n' + '..#.................................................#.............................................#.....................#.........\n' + '.....#...............#...#.......................#.......................#......................................#...........#.....\n' + '...........#...#................................#.............................#........#.........................................#\n' + '..............................#.....................#......................#...#................................#.................\n' + '.........#.....................................................#...#......................................#................#......\n' + '.....#.....................#.................................#...................................................#....#......#....\n' + '................#.........#.........................#...........#...#..............................................#..............\n' + '.................................#....................................................................#..................#......#.\n' + '#..............#......................................................................#.....#.....................................\n' + '.............#......#..............##.#............#.#.....................#..........#.......#..........................#........\n' + '.......#............#.................#...........................................................#.............................#.\n' + '...........................#.......................#..................#....#....................................#.................\n' + '....#.....##...........................................#...........#.............#........................#.....#.................\n' + '............................#..............................................##..........#..................#.......#...............\n' + '#.............................#.............#...............................#..........#...#.....................................#\n' + '.............#.......#.....................................#...###......##...............#..#..............#.........#............\n' + '.......#......##.....#..................#....................................#............#................#...................#..\n' + '..............#......................#............#........#.....................................................#.........#....#.\n' + '.............#.......#...............................................##......#...........#...........#............................\n' + '#.#....#..............................................................#.........................................#...............#.\n' + '...#....#........................#.#.......#.....................#.............................#.#......................#.#.......\n' + '.##........................................................#.#...................#.....#.................................#........\n' + '............................#.#..................................#....#...........................................................\n' + '..................................................#......#...............#...............................#..#..#.......#..........\n' + '..........#......................#..........#.........................#...............#..##.....................#.................\n' + '...#.......#.........................................................#............#.........#...#................................#\n' + '....................#...................................#..........#.....#...#..#........#............#................#..........\n' + '...............................#........#.....................................#.....................................#.........#...\n' + '....#....................#...................................#.#........................#.........................................\n' + '.........#............................#.....................#.............#...........##.........#................................\n' + '.............................................##........................................#......#................................#..\n' + '...#...............................#.#...#...........#.............................#.............................................#\n' + '.............................#...........#................#..................................................#............#.......\n' + '................#....................................................................................#..#.#.......................\n' + '...#.............#.#..#.......................#.................#...............#..#....#..............#............#......#......\n' + '...........#......#............................#.....#..........#.#.................#..........#...........#...............#...#..\n' + '....#..................#...........................#.........#............#........#..........#..............................#....\n' + '..........#.......#...................#......#.......#.......#....................#.....................................#.........\n' + '...#....................................................#......#...#...................#.....................#....................\n' + '....................#..#.....#......#...................#............#.......................................#...............#....\n' + '.........................#.......#.....#..#.......#...........#......##..............................#.........#..................\n' + '.#...........#...#.........#....#...#.......#....#........................#...................#...#..................#............\n' + '.........##......#..............................#....................#..#...#..................#............................#.....'
const oneDmatrix = strMatrix.split('\n');
const twoDmatrix = oneDmatrix.map(elemStr => elemStr.split(''));

// console.log(countUniquePosition(twoDmatrix))

const countGuardPositions = (matrix) => {
    let foundedGuardPlaces = 0;

    const findPosition = () => {
        let key, pos;
        for (let i = 0; i < matrix.length; i++) {
            const row = matrix[i];
            for (let j = 0; j < row.length; j++) {
                const col = row[j];
                if (['^', '>', 'v', '<'].includes(col)) {
                    key = col;
                    pos = [i, j];
                    return { key, pos };
                }
            }
        }
    };

    const countNextPosition = (start) => {
        const way = mapping.get(start.key);
        const [point1, point2] = [start.pos[0] + way[0], start.pos[1] + way[1]];

        if (point1 < 0 || point2 < 0 || point1 >= matrix.length || point2 >= matrix[0].length) {
            return 'stop';
        }

        if (matrix[point1][point2] === '#') {
            const newKey = changedKey(start.key);
            return { key: newKey, pos: start.pos };
        }

        return { key: start.key, pos: [point1, point2] };
    };

    let initialPosition = findPosition();

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === '.' && !['^', '>', 'v', '<'].includes(matrix[i][j])) {
                const originalCell = matrix[i][j];
                matrix[i][j] = '#';

                let position = { ...initialPosition };
                const wentPoints = new Set();

                while (true) {
                    const nextPosition = countNextPosition(position);

                    if (nextPosition === 'stop') break;

                    const newWentPosition = `${nextPosition.key},${nextPosition.pos[0]},${nextPosition.pos[1]}`;
                    if (wentPoints.has(newWentPosition)) {
                        foundedGuardPlaces++;
                        break;
                    } else {
                        wentPoints.add(newWentPosition);
                        position = nextPosition;
                    }
                }

                matrix[i][j] = originalCell;
            }
        }
    }

    return foundedGuardPlaces;
};

console.log(countGuardPositions(matrixForTest));
console.log(countGuardPositions(twoDmatrix));


