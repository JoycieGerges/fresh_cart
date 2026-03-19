
import Products from './web/products/page';
import CategorySlider from './components2/categoryslider/categoryslider';
import HomeBanner from './components2/banner/banner';
import MianSlider from './components2/mainslider/mainslider';

export default function Home() {

  return <>
      <MianSlider />
      <HomeBanner/>
      <CategorySlider/>
      <Products/>
  </>
}
