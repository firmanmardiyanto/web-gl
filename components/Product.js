import { Button, Modal } from 'flowbite-react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { useState } from 'react';
import resolveAssetUrl from '../lib/resolveAssetUrl';

const ModelViewer = dynamic(() => import('./ModelViewer'), {
  ssr: false,
});

function Product({ name, price, model }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="relative w-full h-72">
        <div className="h-48 mx-auto w-40 absolute top-0 left-0 right-0 z-10">
          <ModelViewer
            modelPath={resolveAssetUrl(model.path)}
          />
        </div>
        <div
          onClick={() => setShowModal(true)}
          aria-hidden
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
      <Modal
        className="h-screen"
        show={showModal}
        size="7xl"
        onClose={() => setShowModal(false)}
      >
        <Modal.Header>
          {name}
          {' '}
          | $
          {price?.toFixed(2)}
        </Modal.Header>
        <Modal.Body>
          <div className="h-[calc(100vh-300px)]">
            <ModelViewer
              modelPath={resolveAssetUrl(model.path)}
              orbitControls={{
                autoRotate: true,
                enableZoom: true,
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button>
            Buy
          </Button>
          <Button
            color="gray"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
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
