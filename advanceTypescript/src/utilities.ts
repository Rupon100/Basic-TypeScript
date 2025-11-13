// Pick Utility - just used for pic specific key and use those ina new type
type Product = {
    id: number;
    name: string;
    price: number;
    stock: string;
    color?: string;
}
type ProductSummery = Pick<Product, 'id' | 'name'>
const product1: ProductSummery = {
    id: 123,
    name: "mango",
}

// omit - for omit a key from a object
type OmitProduct = Omit<Product, "stock" | "price">
const product2: OmitProduct = {
    id: 909,
    name: "Apple",
}

// make all property optional
type MakeOptional = Partial<Product>
const product4: MakeOptional = {
    name: "kollok"
}

// required - make all properties required
type MakeRequired = Required<Product>;
const product5: MakeRequired = {
    // all are required
}

// Readonly - makes all properties readonly - cannot be reassigned
type MakeReadonly = Readonly<Product>;

// Record - creates an object type with specific keys and value types
type Roles = "admin" | "editor" | "viewer";
type MakeRecord = Record<Roles, boolean>;
const userRoles: MakeRecord = {
    admin: false,
    editor: true,
    viewer: true
}

// Pick - pick some properties from a type | create a new types
type BasicUser = Pick<Product, "id">;
const newProduct: BasicUser = {
    id: 99911
}

 



