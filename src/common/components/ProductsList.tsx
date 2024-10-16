export function ProductsList(_props: { readonly products: any[] }) {
    const { products } = _props;
    console.log(products);

    function getDescription(description: string) {
        return description.length > 100 ? `${description.slice(0, 100)}...` : description;
    }
    function getTitle(title: string) {
        return title.length > 30 ? `${title.slice(0, 30)}...` : title;
    }
    return (
        <div className="flex overflow-x-auto gap-6 p-6">
            {products.length > 0 ? (
                products.map((product: any) => (
                    <div
                        key={product.id}
                        className="bg-white p-4  drop-shadow-md shadow-red-950 min-w-60 relative flex flex-col items-center pb-14"
                    >
                        <img src={product.image} alt={product.title} className="h-40 w-full object-contain" />
                        <h2 className="mt-4 text-lg font-semibold text-gray-900">{getTitle(product.title)}</h2>
                        <p className="text-sm text-gray-600">{getDescription(product.description)}</p>
                        <div className="mt-4 flex justify-between items-center absolute bottom-0 w-full gap-6 p-4">
                            <span className="text-lg font-semibold text-gray-900">${product.price}</span>
                            <button className="px-2 py-1 bg-red-600 text-white ">Add to cart</button>
                        </div>
                    </div>
                ))
            ) : (
                <div className="grid place-items-center">No hay productos disponibles</div>
            )}
        </div>
    );
}
