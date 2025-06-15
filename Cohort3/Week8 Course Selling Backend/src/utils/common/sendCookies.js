const sendToken=(res,token)=>{
    const options = {
        expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: true,
        sameSite: "none",
    }
    res.cookie("token", token, options)
}

module.exports=sendToken;