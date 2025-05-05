import Swal from 'sweetalert2';
import useAxiosSecure from '../useAxiosSecure';
const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const price = form.price.value;
        const photo = form.photo.value;

        const newProduct = { name, price, photo }

        //console.log(newProduct);
        const axiosSecure = useAxiosSecure();

        // send data to the server
        axiosSecure.post('/product', newProduct)
            .then(res => {
                //console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="bg-[#F4F3F0] m-10 p-10 rounded-xl">
            <h2 className="text-3xl text-center mb-4 font-extrabold text-red-950">Add a Product</h2>
            <form onSubmit={handleAddProduct}>
                {/* form name and price row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Product" className="btn btn-block" />

            </form>
        </div>
    );
};

export default AddProduct;