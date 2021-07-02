let fizzBuzz = (x,y,str1, str2) => {
    for(let i=1; i<=100; i++) {
      if(i%x==0 && i%y==0) {
        console.log(str1,str2)
      } else if (i%x==0) {
        console.log(str1)
      }
     else if (i%y==0) {
        console.log(str2);
      } else {
        console.log(i); 
      }
    }
}
fizzBuzz(3,5,"Digital","House")