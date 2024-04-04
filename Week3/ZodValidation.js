const zod =require('zod');

const inputValidator=(input)=>{

    const schema=zod.object({
        email:zod.string().email(),
        password:zod.string().min(3).max(8)
    })
  const response=schema.safeParse(input)

  console.log(response);
}

inputValidator({
    email:"xyz@mail.mi",
    password:"12345678"
})