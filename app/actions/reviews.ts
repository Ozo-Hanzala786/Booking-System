'use server';

import { addReview } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function createReviewAction(productId: string, formData: FormData) {
  const author = formData.get('author') as string;
  const rating = Number(formData.get('rating'));
  const content = formData.get('content') as string;

  if (!author || !rating || !content) {
    throw new Error('All fields are required');
  }

  addReview(productId, {
    author,
    rating,
    content
  });

  revalidatePath(`/products/${productId}`);
}
