'use server';
/**
 * @fileOverview A flow for generating engaging captions for event photos and descriptions.
 *
 * - generateEventCaption - A function that generates a caption for an event.
 * - GenerateEventCaptionInput - The input type for the generateEventCaption function.
 * - GenerateEventCaptionOutput - The return type for the generateEventCaption function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateEventCaptionInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of the event, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  description: z.string().describe('The description of the event.'),
});
export type GenerateEventCaptionInput = z.infer<typeof GenerateEventCaptionInputSchema>;

const GenerateEventCaptionOutputSchema = z.object({
  caption: z.string().describe('An engaging caption for the event photo and description.'),
});
export type GenerateEventCaptionOutput = z.infer<typeof GenerateEventCaptionOutputSchema>;

export async function generateEventCaption(input: GenerateEventCaptionInput): Promise<GenerateEventCaptionOutput> {
  return generateEventCaptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateEventCaptionPrompt',
  input: {schema: GenerateEventCaptionInputSchema},
  output: {schema: GenerateEventCaptionOutputSchema},
  prompt: `You are a social media manager for NMIT ACM. Generate an engaging caption for the following event photo and description.

Description: {{{description}}}
Photo: {{media url=photoDataUri}}`,
});

const generateEventCaptionFlow = ai.defineFlow(
  {
    name: 'generateEventCaptionFlow',
    inputSchema: GenerateEventCaptionInputSchema,
    outputSchema: GenerateEventCaptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
