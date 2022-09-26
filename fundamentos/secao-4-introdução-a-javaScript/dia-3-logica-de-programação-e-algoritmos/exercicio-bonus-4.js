let n = 10;

for (let index = 1; index <=n; index++) {
    let line = '';
    if (index%2!=0) {
        blankspace=n-index;
        for (let i = 1 ; i <= (blankspace/2); i++) {
            line+=' ';            
        }
        for (let i = 1 ; i <= index; i++) {
            line+='*';            
        }
        for (let i = 1 ; i <= (blankspace/2); i++) {
            line+=' ';            
        }
        console.log(line);
    }
}