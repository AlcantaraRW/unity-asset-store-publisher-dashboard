class Sale {
  static schema = {
    name: 'Sale',
    properties: {
      package_name: 'string',
      price: 'double',
      quantity: 'int',
      refunds: 'int',
      chargebacks: 'int',
      gross: 'double',
      first_sale: 'date',
      last_sale: 'date',
      net: 'double',
    },
  };
}

export default Sale;
