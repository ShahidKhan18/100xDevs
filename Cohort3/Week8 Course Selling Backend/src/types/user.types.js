const { z } = require("zod");

const createUserSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: "Name is required",
        }).min(5, "Name must be atleast 5 characters Long"),
        email: z.string({
            required_error: "Email is required",
        }).email("Invalid email format"),
        password: z
            .string({
                required_error: "Password is required",
            })
            .min(8, "Password must be at least 8 characters long")
            .refine((val) => /[a-z]/.test(val), {
                message: "Password must contain at least one lowercase letter",
            })
            .refine((val) => /[A-Z]/.test(val), {
                message: "Password must contain at least one uppercase letter",
            })
            .refine((val) => /[0-9]/.test(val), {
                message: "Password must contain at least one number",
            })
            .refine((val) => /[\W_]/.test(val), {
                message: "Password must contain at least one special character",
            }),
    }),
});

const loginUserSchema = z.object({
    body: z.object({
        email: z.string({
            required_error: "Email is required",
        }).email("Invalid email format"),
        password: z
            .string({
                required_error: "Password is required",
            })
            .min(8, "Password must be at least 8 characters long")
            .refine((val) => /[a-z]/.test(val), {
                message: "Password must contain at least one lowercase letter",
            })
            .refine((val) => /[A-Z]/.test(val), {
                message: "Password must contain at least one uppercase letter",
            })
            .refine((val) => /[0-9]/.test(val), {
                message: "Password must contain at least one number",
            })
            .refine((val) => /[\W_]/.test(val), {
                message: "Password must contain at least one special character",
            })
    })
})

module.exports = { createUserSchema, loginUserSchema };
