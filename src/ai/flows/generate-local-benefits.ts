'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate a summary of the local benefits of joining NMIT ACM.
 *
 * - generateLocalBenefits - A function that generates local NMIT ACM benefits.
 * - GenerateLocalBenefitsInput - The input type for the generateLocalBenefits function.
 * - GenerateLocalBenefitsOutput - The return type for the generateLocalBenefits function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLocalBenefitsInputSchema = z.object({
  inquiry: z.string().describe('The user inquiry about NMIT ACM local benefits.'),
});
export type GenerateLocalBenefitsInput = z.infer<typeof GenerateLocalBenefitsInputSchema>;

const GenerateLocalBenefitsOutputSchema = z.object({
  localBenefits: z.string().describe('A summary of the local benefits of joining NMIT ACM.'),
});
export type GenerateLocalBenefitsOutput = z.infer<typeof GenerateLocalBenefitsOutputSchema>;

export async function generateLocalBenefits(input: GenerateLocalBenefitsInput): Promise<GenerateLocalBenefitsOutput> {
  return generateLocalBenefitsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLocalBenefitsPrompt',
  input: {schema: GenerateLocalBenefitsInputSchema},
  output: {schema: GenerateLocalBenefitsOutputSchema},
  prompt: `You are NMIT ACM local chapter expert.
  Based on the user inquiry, generate a summary of the local benefits of joining NMIT ACM.

  Inquiry: {{{inquiry}}}
  `,
});

const generateLocalBenefitsFlow = ai.defineFlow(
  {
    name: 'generateLocalBenefitsFlow',
    inputSchema: GenerateLocalBenefitsInputSchema,
    outputSchema: GenerateLocalBenefitsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
