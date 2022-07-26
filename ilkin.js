for (let i = 1 ;i<=25 ;i++) {
    console.log(i);
}

//calisma-2

const myObj = {
    kitabad: "Gorunmez adam",
    mentiq: "Aksion",
    qiymet: "15₼"
};

for (let x in myObj) {
   console.log(myObj[x]);
};

//calisma-3

const arr= ["Baku" , "London" , "Ankara" , "Rome"];
const arr2= ["Azerbaijan" , "Gence" , "Turkey" , "France"]

for (let y in arr) {
    for (let z in arr2) {
        console.log(arr[y] + " is the capital city of " + arr2[z])
    }
}