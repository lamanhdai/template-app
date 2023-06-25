import FeatureProduct from 'components/FeatureProduct';

import {
  StyledFeatureProductList
} from './index.style'

import img1 from '../../assets/img/alexandra-daddario-bmfnibnlrr-540x830.jpg';
import img2 from '../../assets/img/080705-43255610-d8c7-11e4-91d8-f0bc1d307f16-540x830.jpg';
import img3 from '../../assets/img/park-jung-yoon-13-03-2017-32-bcu8je1qep-540x830.jpg';
import img4 from '../../assets/img/ZARDOSHI-1-540x830.jpg';

export default function FeatureProductList() {
  return (
    <StyledFeatureProductList className="feature-list container">
      <header className="row section-header max-inner">
        <div className="columns-12 col-centered">
          <h2>Featured Products</h2><hr/>
        </div>
      </header>
      <div className="row">
        <div className="col-6 col-xl-3">
          <FeatureProduct
            img={img1}
            url={'/'}
            productMeta={'LOREM IPSUM'}
            name={'CONSECTETUR ADIPISICING ELIT'}
            price={220.00}
            />
        </div>
        <div className="col-6 col-xl-3">
          <FeatureProduct
            img={img2}
            url={'/'}
            productMeta={'LOREM IPSUM'}
            name={'CONSECTETUR ADIPISICING ELIT'}
            price={220.00}
            />
        </div>
        <div className="col-6 col-xl-3">
          <FeatureProduct
            img={img3}
            url={'/'}
            productMeta={'LOREM IPSUM'}
            name={'CONSECTETUR ADIPISICING ELIT'}
            price={220.00}
            />
        </div>
        <div className="col-6 col-xl-3">
          <FeatureProduct
            img={img4}
            url={'/'}
            productMeta={'LOREM IPSUM'}
            name={'CONSECTETUR ADIPISICING ELIT'}
            price={220.00}
            />
        </div>
      </div>
    </StyledFeatureProductList>
  )
}