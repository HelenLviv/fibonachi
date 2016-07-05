array.forEach (function (F,n){
   switch(n <= 30){
       case 'n == 0':F==0;
         break;
       case 'n < 2':F==1;
         break;
         default:F=F,n-1 + F,n-2;
   }
    console.log(F);
var n = Number(prompt("Enter number between 0 and 30"));
var result=F;

alert(result);