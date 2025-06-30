const { z } = require("zod");

const courseSchema = z.object({
    body: z.object({
        title: z
            .string({
                required_error: "Title is required",
            })
            .max(10, "Title must be at most 10 characters long. ")
            .min(4, "Title must be at least 4 charcters long."),
        description: z
            .string({ required_error: "Description Required" })
            .min(10, "Description must be at least 20 charcters long. "),
        price: z.number({ required_error: "Price required" }),
        imageURL: z.string({ required_error: "Image URL required" }),
    }),
});

module.exports = {
    courseSchema,
};
