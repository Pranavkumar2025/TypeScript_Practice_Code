


type user = {
    name : String,
    age : Number,
    Branch : String
}


function myuser(userdata: user){
    
    return userdata;
}

const user1 = {
    name : "Pranav Kumar",
    age : 23,
    Branch: "AIML"
}

console.log(myuser(user1))