import LaserLights from '../components/laserLights';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Root() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {  // https://felixgerschau.com/react-hooks-settimeout/
      router.push('/home');
    }, 1000);
    router.prefetch('/home');  // we want loading this page to be faster.
    return () => clearTimeout(timer);  // https://stackoverflow.com/a/7391588
  });

  return (
    <LaserLights/>
  );
}
