export default function ProductCard({product}){
    return(
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-3300">
            <div className="flex justify-center items-center h-48 bg-gray-100">
                <img src={product.thumbnail} alt={product.title} className="max-h-full max-w-full  object-cover" />
            </div>
            <div className="p-4 flex flex-col h-48">
                <h2 className="text-lg font-bold">{product.title}</h2>
                <p className="text-xl font-bold mb-2 line-clamp-2">${product.price.toFixed(2)}</p>
                {/* <p>{product.description}</p> */}
                <p className="text-gray-500 mt-auto">Category: {product.category}</p>
            </div>
             </div>
    )
}