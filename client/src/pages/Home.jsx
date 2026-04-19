import { Helmet } from 'react-helmet-async'
import Hero from '../components/home/Hero'
import ServicesPreview from '../components/home/ServicesPreview'
import WhyChooseUs from '../components/home/WhyChooseUs'
import GalleryPreview from '../components/home/GalleryPreview'
import VideoSection from '../components/home/VideoSection'
import Testimonials from '../components/home/Testimonials'
import CTASection from '../components/home/CTASection'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Garden Recovery Ltd | Expert Gardening Services</title>
        <meta name="description" content="Transform your outdoor space with professional gardening, landscaping, and tree care services from Garden Recovery Ltd." />
        <meta property="og:title" content="Garden Recovery Ltd | Expert Gardening Services" />
        <meta property="og:description" content="Professional gardening and landscaping services to transform your outdoor space." />
        <meta property="og:image" content="/images/hero/hero-bg.jpg" />
      </Helmet>
      
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <GalleryPreview />
      <VideoSection />
      <Testimonials />
    </>
  )
}

export default Home