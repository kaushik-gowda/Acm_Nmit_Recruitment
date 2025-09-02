'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate a summary of the local benefits of joining ACM NMIT.
 *
 * - generateLocalBenefits - A function that generates local ACM NMIT benefits.
 * - GenerateLocalBenefitsInput - The input type for the generateLocalBenefits function.
 * - GenerateLocalBenefitsOutput - The return type for the generateLocalBenefits function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLocalBenefitsInputSchema = z.object({
  inquiry: z.string().describe('The user inquiry about ACM NMIT local benefits.'),
});
export type GenerateLocalBenefitsInput = z.infer<typeof GenerateLocalBenefitsInputSchema>;

const GenerateLocalBenefitsOutputSchema = z.object({
  localBenefits: z.string().describe('A summary of the local benefits of joining ACM NMIT.'),
});
export type GenerateLocalBenefitsOutput = z.infer<typeof GenerateLocalBenefitsOutputSchema>;

export async function generateLocalBenefits(input: GenerateLocalBenefitsInput): Promise<GenerateLocalBenefitsOutput> {
  return generateLocalBenefitsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLocalBenefitsPrompt',
  input: {schema: GenerateLocalBenefitsInputSchema},
  output: {schema: GenerateLocalBenefitsOutputSchema},
  prompt: `You are ACM NMIT local chapter expert.
  Based on the user inquiry, generate a summary of the local benefits of joining ACM NMIT.

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
