class ProductModel {
    public id: number;
    public name: string;
    public price: number;
    public stock: number;
    public imageName: string;

    public constructor(product: ProductModel) {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
        this.stock = product.stock;
    }

}

export default ProductModel;