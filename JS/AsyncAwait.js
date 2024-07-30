
async function a(){
    await b();
    setTimeout(()=>{
    console.log('add a');
    },2000);
}

async function b(){
    await c();
    setTimeout(() => {
    console.log("add b");
    }, 1000);
}

async function c(){
    setTimeout(()=>{
        console.log('add c');
    },1000);
}
a();