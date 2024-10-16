import { useEffect, useState } from 'preact/hooks';
import { Loader } from '../../common/components/Loader';
import { ProductsList } from '../../common/components/ProductsList';

export function Home(_props: any) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => {
                setProducts(json);
                setLoading(false);
            });
    }, []);

    return (
        <main>
            <section className="featured-products min-h-40">
                <h1 className="text-center text-3xl font-bold text-gray-900 m-3">Productos destacados</h1>
                {loading ? <Loader /> : <ProductsList products={products} />}
            </section>
        </main>
    );
}
