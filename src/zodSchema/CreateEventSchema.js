import { z } from "zod";

export const createEventSchema = z.object({
  eventName: z.string().min(2, {
    message: "Event name is required.",
  }),
  eventCategory: z.string().min(1, { message: "Category is required." }),
  eventVisibility: z.string().min(1, { message: "Visibility." }),
  ministry: z
    .string()
    .optional()
    .superRefine((data, ctx) => {
      if (data.eventVisibility === "ministry" && !data.ministry) {
        ctx.addIssue({
          path: ["ministry"],
          message: "Ministry is required.",
          code: z.ZodIssueCode.custom,
        });
      }
    }),
  eventDate: z
    .instanceof(Date, { message: "Please select date." }) 
    .refine((date) => !isNaN(date.getTime()), {
      message: "Date is required.",
    }),
  eventTime: z
    .instanceof(Date, { message: "Time is required" })
    .refine((date) => date.getHours() >= 0 && date.getHours() < 24, {
      message: "Time is required.",
    }),
  eventDescription: z.string().optional().default(""),
  assignVolunteer: z
    .array(z.string()) 
    .min(1, { message: "At least one volunteer must be assigned." }),
});
