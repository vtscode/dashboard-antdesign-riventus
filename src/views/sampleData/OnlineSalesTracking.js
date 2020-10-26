import { colorGenerator } from "utils";
import { randomString } from "utils/generate";
export default {
  pieData : [
    {
      name: 'Product 1',
      y: 196.75
    },
    {
      name: 'Product 2',
      y: 224.63
    },
    {
      name: 'Product 3',
      y: 244
    },
    {
      name: 'Product 4',
      y: 300
    },
    {
      name: 'Product 5',
      y: 218.4
    },
  ],

  barData : [
    {
      name : 'Penjualan',
      data : [14.25, 12.88, 12.2, 6, 5.35],
      colors : colorGenerator()
    }
  ],
  tableData : [
    {
      id: randomString(8),
      product_name: 'Item 1',
      product_cost: 10,
      percent_markup: 1,
      total_sold: 15,
      total_revenue: 300,
      product_shipping_charge: 10,
      product_shipping_cost: 5.75,
      product_profit: 14.25,
      returns: 2,
      total_income: 196.75,
    },
    {
      id: randomString(8),
      product_name: 'Item 2',
      product_cost: 11.5,
      percent_markup: 0.75,
      total_sold: 18,
      total_revenue: 362.25,
      product_shipping_charge: 10,
      product_shipping_cost: 5.75,
      product_profit: 12.88,
      returns: 1,
      total_income: 224.63,
    },
    {
      id: randomString(8),
      product_name: 'Item 3',
      product_cost: 13,
      percent_markup: 0.65,
      total_sold: 20,
      total_revenue: 429,
      product_shipping_charge: 10,
      product_shipping_cost: 6.25,
      product_profit: 12.2,
      returns: 0,
      total_income: 244,
    },
    {
      id: randomString(8),
      product_name: 'Item 4',
      product_cost: 5,
      percent_markup: 0.9,
      total_sold: 50,
      total_revenue: 475,
      product_shipping_charge: 5,
      product_shipping_cost: 3.5,
      product_profit: 6,
      returns: 0,
      total_income: 300,
    },
    {
      id: randomString(8),
      product_name: 'Item 5',
      product_cost: 4,
      percent_markup: 0.9,
      total_sold: 42,
      total_revenue: 319,
      product_shipping_charge: 5,
      product_shipping_cost: 3.25,
      product_profit: 5.35,
      returns: 3,
      total_income: 218.4,
    },
  ],
  columnTable : [
    {
      title: 'Product',
      dataIndex: 'product_name',
      key: 'product_name',
    },
    {
      title: 'Cost per Product',
      dataIndex: 'product_cost',
      key: 'product_cost',
    },
    {
      title: 'Percent Markup',
      dataIndex: 'percent_markup',
      key: 'percent_markup',
    },
    {
      title: 'Total Sold',
      dataIndex: 'total_sold',
      key: 'total_sold',
    },
    {
      title: 'Total Revenue',
      dataIndex: 'total_revenue',
      key: 'total_revenue',
    },
    {
      title: 'Shipping Charge/Product',
      dataIndex: 'product_shipping_charge',
      key: 'product_shipping_charge',
    },
    {
      title: 'Shipping Cost/Product',
      dataIndex: 'product_shipping_cost',
      key: 'product_shipping_cost',
    },
    {
      title: 'Profit per Product (incl. shipping)',
      dataIndex: 'product_profit',
      key: 'product_profit',
    },
    {
      title: 'Returns',
      dataIndex: 'returns',
      key: 'returns',
    },
    {
      title: 'Total Income',
      dataIndex: 'total_income',
      key: 'total_income',
    },
  ]
};