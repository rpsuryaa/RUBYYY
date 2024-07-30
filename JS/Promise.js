
// Promise

function proBaseEg(){
    let prom=new Promise((resolve)=>{
        setTimeout(()=>{
            reject("this ia reject example");
            resolve("This is a base example");
        },1000);
    });

    console.log(
        .then((val) =>{
            console.log(val);
        })
        .catch(val=>{
            console.log(val);
        })
    );
}
proBaseEg();


// real time base example

function locationFinder(){
    time=2000
    location="Skcet";
    
    return new Promise((locFound,locNotFound)=>{
        setTimeout(() =>{
            if(isLocationFound(location,time)){
                locFound("Location Found");
            }else{
                locNotFound("location not found");
            }
            },time);
    });
}
isLocationFound=(location,time)=>{
    isLoc="Skcet";
    time=20000;
    // return new Promise((locFound,locNotFound))
    if(loc === isLoc && t<=time){
        return true;
    }else{
        return false;
    }
    
}
locationFinder()
    .then((Val))