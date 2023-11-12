import { Product } from '@/types';
import React from 'react';
import NoResult from './ui/no-result';
import ProductCard from './ui/product-card';

interface ProductListProps {
	title: string;
	items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
	return (
		<div className="space-y-4">
			<h3 className="font-bold text-3xl">{title}</h3>
			{items.length === 0 && <NoResult />}
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{items.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default ProductList;
