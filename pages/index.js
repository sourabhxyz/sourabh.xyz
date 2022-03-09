import Head from 'next/head';
import LaserLights from '../components/laserLights';
import Landing from '../sections/landing';
import { useState, useEffect } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <Head>
        <title>sourabh.xyz</title>
        <meta name="description" content="About Sourabh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? LaserLights() : Landing()}
    </div>
  );
}
