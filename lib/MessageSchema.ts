import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp",];
const ACCEPTED_FILE_TYPES = ["image/png", "image/webp",];
export const MessageSchema = toTypedSchema(z.object({
  mess: z
    .string()
    .min(3, {
      message: 'Message must be at least 3 characters.',
    })
    .max(160, {
      message: 'Message must not be shorter than 160 characters.',
    }),

  image: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),

  file: z
    .any()
    .refine((files) => files?.length == 1, "File is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      ".png and .webp files are accepted."
    ),

  emoji: z
    .any()
    .refine((files) => files?.length == 1, "File is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      ".png and .webp files are accepted."
    )
}))