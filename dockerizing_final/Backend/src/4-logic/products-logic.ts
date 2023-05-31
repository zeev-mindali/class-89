import { OkPacket } from "mysql";
import dal from "../1-utils/dal";
import ProductModel from "../3-models/product-model";

async function getAllProducts(): Promise<ProductModel[]> {
    const sql = "SELECT ProductID AS id, ProductName AS name, UnitPrice AS price, UnitsInStock AS stock FROM products";
    const products = await dal.execute(sql);
    return products;
}

async function addProduct(product: ProductModel): Promise<ProductModel> {
    const sql = "INSERT INTO products(ProductName, UnitPrice, UnitsInStock) VALUES(?, ?, ?)";
    const info: OkPacket = await dal.execute(sql, [product.name, product.price, product.stock]);
    product.id = info.insertId;
    return product;
}

export default {
    getAllProducts,
    addProduct
};

