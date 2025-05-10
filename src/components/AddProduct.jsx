import useAxiosSecure from "../useAxiosSecure";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const AddProduct = () => {
  const axiosSecure = useAxiosSecure();

  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const price = form.price.value;
    const photo = form.photo.value;

    const newProduct = { name, price, photo };

    axiosSecure.post("/product", newProduct).then((res) => {
      if (res.data.insertedId) {
        toast.success("Product Added", {
          description: `${name} added successfully.`,
        });
        form.reset();
      }
    });
  };

  return (
    <div className="flex justify-center py-10">
      <Card className="w-full max-w-3xl bg-[#f9fafb] shadow-md p-6">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-sky-600">
            Add a Product
          </CardTitle>
        </CardHeader>
        <form onSubmit={handleAddProduct}>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="mb-2">Product Name</Label>
                <Input id="name" name="name" placeholder="Product Name" required />
              </div>
              <div>
                <Label htmlFor="price" className="mb-2">Price</Label>
                <Input id="price" name="price" placeholder="Price" required />
              </div>
            </div>
            <div>
              <Label htmlFor="photo" className="mb-2">Photo URL</Label>
              <Input id="photo" name="photo" placeholder="Photo URL" required />
            </div>
            <Button type="submit" className="w-full">
              Add Product
            </Button>
          </CardContent>
        </form>
      </Card>
    </div>
  );
};

export default AddProduct;