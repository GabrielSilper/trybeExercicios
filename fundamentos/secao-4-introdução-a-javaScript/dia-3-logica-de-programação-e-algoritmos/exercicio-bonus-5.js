let n = 10;
let addSpace = 0;
let positionF = (n/2);
let positionS = (n/2)+1;
for (let index = 2; index <=n; index++) {
    let line = '';
    if (index%2==0 && index!=n) {
        for (let i = 1; i <=n ; i++) {
            if (i==positionF || i==positionS) {
                line+='*';
            }else{
                line+=' ';
            }
        }
        positionF--;
        positionS++;        
        console.log(line);
    }else if (index==n) {
        for (let i = 1; i <=n ; i++) {
            line+='*';
        }
        console.log(line);
    }else{
        console.log(line);
    }
}