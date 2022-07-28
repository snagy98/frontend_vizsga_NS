// 1. Feladat
function RnG(alsoHatar, felsoHatar) {
    var eredmeny = Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar);
    return eredmeny;
}
console.log(RnG(1, 20));
// 2. Feladat
function TombGenerator(meret, alsoHatar, felsoHatar) {
    var eredmeny = [];
    if (alsoHatar > felsoHatar) {
        alsoHatar -= felsoHatar;
        for (var i = 1; i <= meret; i++) {
            eredmeny.push(RnG(alsoHatar, felsoHatar));
        }
    }
    else {
        for (var i = 1; i <= meret; i++) {
            eredmeny.push(RnG(alsoHatar, felsoHatar));
        }
    }
    return eredmeny;
}
var generaltTomb = TombGenerator(RnG(2, 10), RnG(1, 20), RnG(1, 20));
console.log(generaltTomb);
//3. Feladat
function Duplazo(VizsgaltTomb) {
    var eredmeny = [];
    for (var i = 0; i < VizsgaltTomb.length; i++) {
        eredmeny.push(VizsgaltTomb[i] * 2);
    }
    return eredmeny;
}
console.log(Duplazo(generaltTomb));
