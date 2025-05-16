// 📝 Day 8: Write a javascript function which clone an array passed by the user?


// by using two method we solve this problem

// 1.Spread operator

function clonearr(arr) {
    
    return [...arr]; // this will clone all the array which is passed
}
clonearr([2, 4, 5, 8, 9, 4]);

// 2.push method
function clonearr(arr) {
    let Newarray=[];
    arr.forEach(function (e) {
     Newarray.push(e);   
    })
    return Newarray;
}
clonearr([2, 4, 5, 8, 9, 4]);



