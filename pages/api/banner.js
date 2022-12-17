const model = {
  name: 'furniture1',
  path: '/assets/models/furniture1.glb',
  scale: 40,
  position: [0, -8, 0],
};

const banner = {
  title: 'Exotic minimal furniture.',
  subtitle: 'Choose from a wide of well-crafted premium quality wooden furniture online.',
  model,
};

export default function handler(req, res) {
  res.status(200).json({
    status: 'success',
    data: banner,
  });
}
