import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import resolveAssetUrl from '../lib/resolveAssetUrl';

const ModelViewer = dynamic(() => import('./ModelViewer'), {
  ssr: false,
});

function Product({
  name, price, model,
}) {
  return (
    <div className="relative w-full h-72">
      <div className="h-48 mx-auto w-40 absolute top-0 left-0 right-0 z-10">
        <ModelViewer
          modelPath={resolveAssetUrl(model.path)}
          orbitControls={{
            autoRotate: true,
            enableZoom: true,
          }}
        />
      </div>
      <div
        className="w-full h-44 bg-white mt-24 text-center rounded-xl select-none shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        <div className="py-12" />
        <p className="">{name}</p>
        <p className="text-xl font-bold">
          $
          {price?.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  model: PropTypes.shape({
    path: PropTypes.string.isRequired,
    position: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
};

export default Product;
