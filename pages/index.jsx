import Layout from '../components/Layout';
import Hero from '../components/Hero/Hero';
import About from '../components/About/about';
import Team from '../components/Team/Team';
import Gallery from '../components/Gallery/Gallery';

export default function Home() {
  return (
    <Layout title="Anasayfa">
      <Hero />
      <About />
      <Gallery />
      <Team />
    </Layout>
  );
}
