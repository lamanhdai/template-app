import CollectionProduct from 'components/CollectionProduct';

import {
  StyledCollectionProductGrid
} from './index.style';

import img1 from '../../assets/img/Groom-Portrait-Arjun-Narmada-1140x750-1024x673.webp';
import img2 from '../../assets/img/Fragrance-1140x750.webp';
import img3 from '../../assets/img/frontpage-hero-video.webp';

export default function CollectionProductGrid() {
  return (
  <StyledCollectionProductGrid className="container">
    <div className="row">
      <div className="position-relative col-6">
        <CollectionProduct
          img={img1}
          name={'SAIGON COLLECTION'}
          type={'SAIGON WITH LOVE AND PASSION'}
          url={'/'}
        />
      </div>
      <div className="position-relative col-6">
        <CollectionProduct
          img={img2}
          name={'PARIS COLLECTION'}
          type={'PARIS WITH LOVE AND PASSION'}
          url={'/'}
        />
      </div>
      <div className="position-relative col-12">
        <CollectionProduct
          img={img3}
          name={'FASHIONABLE COLLECTIONS'}
          type={'For SUMMER'}
          url={'/'}
        />
      </div>
    </div>
  </StyledCollectionProductGrid>
  )
}