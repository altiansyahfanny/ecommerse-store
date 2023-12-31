import { Category } from '@/types';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
	const res = await fetch(API_URL);

	return res.json();
};

export default getCategories;
