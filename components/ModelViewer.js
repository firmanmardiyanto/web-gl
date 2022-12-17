import React, { Suspense, useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import {
  Html,
  OrbitControls,
  Stage,
  useProgress,
} from '@react-three/drei';
import PropTypes from 'prop-types';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Progress } from 'flowbite-react';
import resolveAssetUrl from '../lib/resolveAssetUrl';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <Progress progress={progress} className="z-10" />
    </Html>
  );
}

function ModelViewer({
  modelPath,
  orbitControls = {
    autoRotate: false,
    enableZoom: false,
    maxPolarAngle: Math.PI / 2,
    minPolarAngle: Math.PI / 2,
  },
  canvas = {
    gl: { preserveDrawingBuffer: true },
    shadows: true,
    dpr: [1, 1.5],
    camera: {
      position: [0, 2, 150], fov: 50, zoom: 0.7,
    },
  },
  stage = {
    preset: 'rembrandt',
    intensity: 1,
    contactShadow: true,
    shadows: true,
    adjustCamera: true,
    environment: 'city',
    animations: false,
  },
}) {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, resolveAssetUrl(modelPath));

  return (
    <Canvas
      {...canvas}
    >
      <ambientLight
        intensity={0.25}
      />
      <Suspense
        fallback={<Loader />}
      >
        <Stage
          controls={ref}
          {...stage}
        >
          <primitive
            object={gltf.scene}
          />
        </Stage>
      </Suspense>
      <OrbitControls
        ref={ref}
        {...orbitControls}
      />
    </Canvas>
  );
}

ModelViewer.propTypes = {
  modelPath: PropTypes.string.isRequired,
  orbitControls: PropTypes.shape({
    autoRotate: PropTypes.bool,
    enableZoom: PropTypes.bool,
    maxPolarAngle: PropTypes.number,
    minPolarAngle: PropTypes.number,
  }),
  canvas: PropTypes.shape({
    gl: PropTypes.shape({
      preserveDrawingBuffer: PropTypes.bool,
    }),
    shadows: PropTypes.bool,
    dpr: PropTypes.arrayOf(PropTypes.number),
    camera: PropTypes.shape({
      position: PropTypes.arrayOf(PropTypes.number),
      fov: PropTypes.number,
      zoom: PropTypes.number,
    }),
  }),
  stage: PropTypes.shape({
    preset: PropTypes.string,
    intensity: PropTypes.number,
    contactShadow: PropTypes.bool,
    shadows: PropTypes.bool,
    adjustCamera: PropTypes.bool,
    environment: PropTypes.string,
    animations: PropTypes.bool,
  }),
};

ModelViewer.defaultProps = {
  orbitControls: {
    autoRotate: false,
    enableZoom: false,
    maxPolarAngle: Math.PI / 2,
    minPolarAngle: Math.PI / 2,
  },
  canvas: {
    gl: { preserveDrawingBuffer: true },
    shadows: true,
    dpr: [1, 1.5],
    camera: {
      position: [0, 2, 150], fov: 50, zoom: 0.7,
    },
  },
  stage: {
    preset: 'rembrandt',
    intensity: 1,
    contactShadow: true,
    shadows: true,
    adjustCamera: true,
    environment: 'city',
    animations: false,
  },
};

export default ModelViewer;
