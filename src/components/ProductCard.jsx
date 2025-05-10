import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductCard = ({ product }) => {
    const { name, price, photo } = product;

    return (
        <Card className="w-full max-w-sm shadow-lg hover:scale-105 transform duration-300">
            <CardHeader className="p-0">
                <img
                    src={photo}
                    alt={name}
                    className="w-sm h-64 object-cover"
                />
            </CardHeader>

            <CardContent className="space-y-2 p-4">
                <h2 className="text-2xl font-semibold text-sky-600">{name}</h2>
                <p className="text-lg font-medium text-black-900">Price: ${price}</p>
            </CardContent>

            <CardFooter className="flex justify-end px-4 pb-4">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                    Buy Now
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;