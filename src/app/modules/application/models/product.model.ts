class Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
  validity: Date;
  local: string;
  unity: string;
  type: any;
  typeId: number;
  productionBatch: string;

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.quantity = 0;
    this.validity = new Date();
    this.local = '';
    this.unity = '';
    this.type = null;
    this.typeId = 0;
    this.productionBatch = '';
  }
}

export default Product;
