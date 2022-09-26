let n = 9;

for (let index = 1; index <=n; index++) {
    let line ='';
    for (let i = 1; i <=n-index; i++) {
        line+=' ';
    }
    for (let i = 1; i <=index; i++) {
        line+='*';
    }
    console.log(line);
}