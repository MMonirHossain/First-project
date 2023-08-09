const status= true;
const mark =90;
function enroll(){
    console.log("Enrollment Processing...");

    const promise = new Promise((resolve, reject)=>{
        setTimeOut(()=>{
            if(status){
                resolve();
            }else{
                reject('Payment not fulfilled!');
            }
        },2000);
    });

    return promise;
};

function progress(){
    console.log("Progress Processing...");

    const promise = new Promise((resolve, reject)=>{
        setTimeOut(()=>{
            if(mark>=80){
                resolve();
            }else{
                reject('Mark is not on the mark!');
            }
        },3000);
    });

    return promise;
};

function getCertificate(){
    console.log("Certificate Processing...");

    const promise = new Promise((resolve, reject)=>{
        setTimeOut(()=>{
            resolve('Success');
        },1000);
    });

    return promise;
};

enroll()
    .then(progress)
    .then(getCertificate)
    .then((value)=>{
          console.log(value);
    })
    .catch((err)=>{
           console.log(err);
    });

// alternative to the above
async function course(){
    try{
        await enroll();
        await process();
        const message = await getCertificate();
        console.log(message);
    } catch(err){
        console.log(err);
    }
};

course();
