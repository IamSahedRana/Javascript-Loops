const count = 3; 

for (i = 0; i <= 10; i++ ){
     if (i > 5){
          console.log('Break up, Boss!')
          break;
     }
     console.log(count, 'x', i, '=',i*count);
}
