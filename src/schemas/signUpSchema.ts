import { z } from "zod";

export const userNameValidation=z
         .string()
         .min(2,"Username must be atleast 2 character")
         .max(20,"Username must not than 20 character")
         .regex(/^[a-zA-Z0-9]+$/,"Username must not contain any special characters")


export const signUpSchema=z.object({
    username:userNameValidation,
    email:z.string().email({message:"Invalid email address"}),
    password:z.string().min(6,{message:"password must be atleast 6 characters"})
    
})