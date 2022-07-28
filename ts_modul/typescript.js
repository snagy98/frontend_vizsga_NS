// 1. Feladat
function Rng(alsoHatar, felsoHatar) {
    var eredmeny = Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar);
    return eredmeny;
}
console.log(Rng(1, 20));
// 2. Feladat
function TombGenerator(meret, alsoHatar, felsoHatar) {
    var eredmeny = [];
    if (alsoHatar > felsoHatar) {
        alsoHatar -= felsoHatar;
        for (var i = 1; i <= meret; i++) {
            eredmeny.push(Rng(alsoHatar, felsoHatar));
        }
    }
    else {
        for (var i = 1; i <= meret; i++) {
            eredmeny.push(Rng(alsoHatar, felsoHatar));
        }
    }
    return eredmeny;
}
var generaltTomb = TombGenerator(Rng(2, 10), Rng(1, 20), Rng(1, 20));
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
//4. Feladat
function PrimekSzama(VizsgaltTomb) {
    var eredmeny = 0;
    for (var i = 0; i < VizsgaltTomb.length; i++) {
        var szamlalo = 0;
        for (var j = 1; j <= VizsgaltTomb[i]; j++) {
            if (VizsgaltTomb[i] % j == 0) {
                szamlalo++;
            }
        }
        if (szamlalo == 2) {
            eredmeny++;
        }
    }
    return eredmeny;
}
console.log(PrimekSzama(generaltTomb));
