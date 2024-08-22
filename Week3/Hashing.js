const bcrypt=require('bcrypt');

const plainPassword="shahid786"

try {
    //+ Hashing a Password
    let hashP;
    bcrypt.hash(plainPassword, 10, (err, hash) => {
      if (err) throw err;
      hashP=hash
      console.log("Hashed password: ",hashP)
    });

    //+ Verifying the password
    
    bcrypt.compare('shahid786',hashP,(err,result)=>{
        if (err) throw err;

        console.log("Password Match: ",result)
    })
    
} catch (error) {
    console.log("Error: ",error);
}
