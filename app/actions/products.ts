'use server';

import { addProduct, deleteProduct } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function createProductAction(formData: FormData) {
  const name = formData.get('name') as string;
  const price = Number(formData.get('price'));
  const category = formData.get('category') as string;
  const image = formData.get('image') as string;
  const description = formData.get('description') as string;
  const featured = formData.get('featured') === 'on';

  if (!name || !price || !category || !image || !description) {
    throw new Error('All fields are required');
  }

  addProduct({
    name,
    price,
    category,
    image,
    description,
    inStock: true,
    featured
  });

  revalidatePath('/admin');
  revalidatePath('/products');
  revalidatePath('/');
}

export async function deleteProductAction(id: string) {
  deleteProduct(id);
  revalidatePath('/admin');
  revalidatePath('/products');
  revalidatePath('/');
}
