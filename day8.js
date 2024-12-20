const testMap = '............\n' + '........0...\n' + '.....0......\n' + '.......0....\n' + '....0.......\n' + '......A.....\n' + '............\n' + '............\n' + '........A...\n' + '.........A..\n' + '............\n' + '............'
const taskMap = '..................................w...............\n' + '..................................................\n' + '.....................................C............\n' + '......................................3...........\n' + '.............b.......u.........w...........3......\n' + '...........................u......................\n' + '...8........K...........u.......y.........I.......\n' + '..................................P5........B.....\n' + '...U................2.P...............B...C.......\n' + '............i......x.P........w......s.C......IB5.\n' + '..............t....................y....x.........\n' + '.......8............K....1.......w............u...\n' + '.................i.............r.........s........\n' + '..2.............t..T.K.......r......8..........I..\n' + '8..............t..T.....r...................5.....\n' + '...2........................1....M.t...N....x.....\n' + '...V....U.......................N.S..........I....\n' + '.........W...i............O....v............S.....\n' + '................L...1...s.fT.....x............3...\n' + '....6.......C...N.........Tf.3....................\n' + '...6.......F..........V..........k...N......H.....\n' + '...................U..f........0......H.y.........\n' + '.......................O...P......0...............\n' + '.......L..U....m.......R............s.............\n' + '6...i.................O....0.2.........H.....B....\n' + '........................R......H.........S........\n' + '......F.....c..........m..............d...........\n' + '................F.L.....m..................7......\n' + '.............J.........................S..........\n' + '.b....j.k..............V0.........................\n' + '.................L.....K..........................\n' + '.......F.......J..............r.....M.............\n' + '......................m1....a.R...7...............\n' + '.......4......Y..6.D..............................\n' + 'k............9.......D................M...........\n' + '.....Xb.................V...h.....................\n' + 'A.........9.Xl..........D......R..................\n' + '4.............c..d........D.............7.........\n' + '.A.4.............c.............M.7.v..............\n' + '..........n.9........................h............\n' + '...j....bd.........f.....p..W.....................\n' + '.............k.........p..........................\n' + '.......W4.......p......X.....5..J.....v...........\n' + '........W.d..c......A........n..v.....o...........\n' + '..........l.....n..........o......Y...h...........\n' + '.....A............................................\n' + '..j..........n....................................\n' + 'a9.lX..................Y...........o..............\n' + '.......a.................Y..........o.............\n' + '...a....l.......................p.................'
const convertToArray = (stringMap) => stringMap.split('\n').map(str => str.split(''));

const testrarray = convertToArray(testMap);
const taskarray = convertToArray(taskMap);

const findAllIndexes = (arr, elem) => arr.reduce(function(a, e, i) {
    if (e === elem)
        a.push(i);
    return a;
}, []);

const countUniqueLocations = (d2array) => {
  const uniqSet = new Set();
  const uniqSymbolsSet = new Set(d2array.flat());
  uniqSymbolsSet.delete('.');
  const uniqKeys = uniqSymbolsSet.keys();

  const iterations = uniqSymbolsSet.size;

  const buildPoints = (points, pointsArray) => {
      const [x, y] = points;
      pointsArray.forEach(([x1, y1]) => {
          const diffX = x - x1;
          const diffY = y - y1;
          if (
              x+diffX < d2array.length &&
              y+diffY < d2array[0].length &&
              x+diffX >= 0 &&
              y+diffY >= 0
          ) {
              uniqSet.add(`${x+diffX},${y+diffY}`);
          }
      })
  }

  for (let i = 0; i < iterations; i++) {
      const searchingKey = uniqKeys.next().value;
      const searchingArr = [];
      for (let j = 0; j < d2array.length; j++) {
          const inds = findAllIndexes(d2array[j], searchingKey);
          inds.forEach(ind => searchingArr.push([j, ind]));
      }

      for (let k = 0; k < searchingArr.length; k++) {
          const kpoints = searchingArr[k];
          const kpointsArray = searchingArr.filter((el, inx) => inx !== k);
          buildPoints(kpoints, kpointsArray);
      }
  }

  return uniqSet.size
}

// console.log(countUniqueLocations(testrarray))
// console.log(countUniqueLocations(taskarray))

const newTestString = 'T.........\n' + '...T......\n' + '.T........\n' + '..........\n' + '..........\n' + '..........\n' + '..........\n' + '..........\n' + '..........\n' + '..........'
const newTestArray = convertToArray(newTestString);

const countUniqueGridLocations = (d2array) => {
    const uniqSet = new Set();
    const uniqSymbolsSet = new Set(d2array.flat());
    uniqSymbolsSet.delete('.');
    const uniqKeys = uniqSymbolsSet.keys();

    const iterations = uniqSymbolsSet.size;

    const buildPoints = (points, pointsArray) => {
        const [x, y] = points;
        uniqSet.add(`${x},${y}`)
        pointsArray.forEach(([x1, y1]) => {
            const diffX = x - x1;
            const diffY = y - y1;

            let tempX = x;
            let tempY = y;

            while (true) {
                tempX += diffX;
                tempY += diffY;
                if (
                    tempX < d2array.length &&
                    tempY < d2array[0].length &&
                    tempX >= 0 &&
                    tempY >= 0
                ) {
                    uniqSet.add(`${tempX},${tempY}`);
                } else {
                    break;
                }
            }

        })
    }

    for (let i = 0; i < iterations; i++) {
        const searchingKey = uniqKeys.next().value;
        const searchingArr = [];
        for (let j = 0; j < d2array.length; j++) {
            const inds = findAllIndexes(d2array[j], searchingKey);
            inds.forEach(ind => searchingArr.push([j, ind]));
        }

        for (let k = 0; k < searchingArr.length; k++) {
            const kpoints = searchingArr[k];
            const kpointsArray = searchingArr.filter((el, inx) => inx !== k);
            buildPoints(kpoints, kpointsArray);
        }
    }

    return uniqSet.size
}

console.log(countUniqueGridLocations(newTestArray))
console.log(countUniqueGridLocations(testrarray))
console.log(countUniqueGridLocations(taskarray))

