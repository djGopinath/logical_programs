var a=[2,1,4,7,5];
var b=0;
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        //< - descending order >- ascending order
        if(a[i]<a[j]){
           b=a[i];
           a[i]=a[j]
           a[j]=b;
        }
    }
console.log(a[i])
}