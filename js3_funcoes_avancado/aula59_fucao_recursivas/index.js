// ela se chama de volta

function recursiva(max){
    //console.log(max);
     if (max >=10) return;
     max++;
     console.log(max);
     recursiva(max)
}

recursiva(0)