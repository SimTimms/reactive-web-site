import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

export function ModelObject(props: { url: string;  }) {
  const colorMap = useLoader(TextureLoader, props.url);

  return (
    <mesh {...props}>
      <boxGeometry args={[0, 3, 3]} />
      <meshStandardMaterial map={colorMap} transparent  />
    </mesh>
  );
}
