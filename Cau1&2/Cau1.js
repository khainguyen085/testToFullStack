let a1 = [1, 2, "a"];
let a2 = [1, 3, "b"];
let a3 = [];
function NewArray(a1, a2) {
    // let a3 = [];
    a1.map(i1=>{
        let match = 0;
        a2.map(i2=>{
            if(i1 == i2){
                match++;
            }
        });
        if (match == 0){
            a3.push(i1);
        }
    });
    a2.map(i1=>{
        let match = 0;
        a1.map(i2=>{
            if(i1==i2){
                match++;
            }
        });
        if(match == 0){
            a3.push(i1);
        }
    })
    console.log(a3)
}

NewArray(a1, a2);