const a = [10,20,30,40,50,60];
const b = [100];

const firstDivision = [];
const secondDivision = [];

function dividirEOrdenar(a){
  if(a.length===0){
    return `array deve conter pelo menos 2 elementos`;
  }
  if(a.length === 1){
    return a;
  }else{
  let j = a.length - 1;
  let meio = a.length/2;
  for(let i=0;i<=meio;i++){
    firstDivision.push(a[i])
    if(j!== meio){
      secondDivision.push(a[j]);
      j--;
    }
  }
  return dividirEOrdenar(firstDivision);
  }
  
}



dividirEOrdenar(a);
console.log(firstDivision);
console.log(secondDivision);