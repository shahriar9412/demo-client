
const ProductCard = ({ product }) => {

    const { name, price, photo } = product;

    return (
        <div className="card bg-base-100 shadow-xl py-4 pt-4 pb-0">

            <div className="card bg-base-100 shadow-sm">
                <figure className="rounded-lg"><img className="rounded-lg w-64 h-64" src={photo} alt="Product" /></figure>

                <div className="card-body">
                    <div>
                        <h2 className="text-3xl text-purple-600">{name}</h2>
                        <h2 className="card-title text-rose-900">Price : {price}</h2>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary bg-lime-600">Buy Now</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ProductCard;