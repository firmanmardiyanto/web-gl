const products = [
  {
    id: 'product1',
    name: 'Bruna Cush',
    price: 145.60,
    model: {
      path: '/assets/models/furniture2.glb',
      scale: 30,
      position: [0, 0, 0],
    },
  },
  {
    id: 'product2',
    name: 'Drop Type',
    price: 265.50,
    model: {
      path: '/assets/models/furniture3.glb',
      scale: 40,
      position: [0, 0, 0],
    },
  },
  {
    id: 'product3',
    name: 'Backboard 3',
    price: 160.00,
    model: {
      path: '/assets/models/furniture4.glb',
      scale: 40,
      position: [0, 0, 0],
    },
  },
];

export default function handler(req, res) {
  res.status(200).json({
    status: 'success',
    data: products,
  });
}
