import { z } from 'zod';
import { SchemaMessageTypes } from '@/utils/';

export const contactSchema = z.object({
  name: z
    .string({ message: SchemaMessageTypes.INVALID_TYPE })
    .trim()
    .refine((value) => value !== '', {
      message: SchemaMessageTypes.REQUIRED_FIELD,
    }),

  email: z
    .string({ message: SchemaMessageTypes.INVALID_TYPE })
    .email({ message: SchemaMessageTypes.INVALID_EMAIL })
    .trim()
    .refine((value) => value !== '', {
      message: SchemaMessageTypes.REQUIRED_FIELD,
    }),

  subject: z
    .string({ message: SchemaMessageTypes.INVALID_TYPE })
    .trim()
    .refine((value) => value !== '', {
      message: SchemaMessageTypes.REQUIRED_FIELD,
    }),

  message: z
    .string({ message: SchemaMessageTypes.INVALID_TYPE })
    .trim()
    .refine((value) => value !== '', {
      message: SchemaMessageTypes.REQUIRED_FIELD,
    }),
});

export type ContactFormDataType = z.infer<typeof contactSchema>;
