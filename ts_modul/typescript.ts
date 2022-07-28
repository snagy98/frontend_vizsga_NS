// 1. Feladat
function Rng(alsoHatar:number,felsoHatar:number):number{
    let eredmeny:number = Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar);

    return eredmeny;
}
console.log(Rng(1,20));



// 2. Feladat

function TombGenerator(meret:number, alsoHatar:number, felsoHatar:number):number[]{

    let eredmeny:number[] = [];

    if(alsoHatar > felsoHatar){
        alsoHatar -= felsoHatar;
        
        for(let i:number = 1; i <=meret; i++){
            eredmeny.push(Rng(alsoHatar,felsoHatar));
        }

    }else{
        for(let i:number = 1; i <=meret; i++){
            eredmeny.push(Rng(alsoHatar,felsoHatar));
        }
    }
    
    return eredmeny;
}
const generaltTomb:number[] = TombGenerator(Rng(2,10),Rng(1,20),Rng(1,20));
console.log(generaltTomb);

//3. Feladat

function Duplazo(VizsgaltTomb:number[]):number[]{

    let eredmeny:number[] = [];

    for (let i:number = 0; i < VizsgaltTomb.length; i++){
        eredmeny.push(VizsgaltTomb[i] * 2);
    }

    return eredmeny;

}

console.log(Duplazo(generaltTomb));

//4. Feladat

function PrimekSzama( VizsgaltTomb:number[]):number{
    let eredmeny:number = 0;


    for (let i:number = 0; i < VizsgaltTomb.length; i++){
        let szamlalo:number = 0;
        for(let j:number = 1; j <= VizsgaltTomb[i]; j++){
            if(VizsgaltTomb[i] % j == 0){
                szamlalo++;
            }
        }
        if(szamlalo == 2){
            eredmeny++;
        }
    }

    return eredmeny;
}

console.log(PrimekSzama(generaltTomb));

