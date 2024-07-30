// No arguement and No return type.

function evenodd(){
    var a= 1000;
    if(a%2==0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}
evenodd();


// Only return type.

function evenodd(){
    var a= 1000;
    if(a%2==0){
        return("Number is even");
    }else{
        return("Number is odd");
    }
}
console.log(evenodd());

// Only arguement

function evenodd(a){
    if(a%2==0){
        console.log("Number is even");
    }else{
        console.log("Number is odd");
    }
}
evenodd(109);

// Has Both arguements and return type.

function evenodd(a){
    
    if(a%2==0){
        return("Number is even");
    }else{
        return("Number is odd");
    }
}
console.log(evenodd(100));

// Arrow Function...

var votingEligibility = () =>{
    age=18
    if(age>=18){
        console.log("Eligible for voting");
    }else{
        console.log("Not eligible for voting");
    }
}
votingEligibility();
