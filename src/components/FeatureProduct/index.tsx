import {
  StyledFeatureProduct,
  StyledProductLink
} from './index.style'

interface FeatureProductType {
  img: string
  url: string
  productMeta: string
  name: string
  price: number
}

export default function FeatureProduct(props: FeatureProductType) {
  const {
    img,
    url,
    productMeta,
    name,
    price
  } = props
  return (
    <StyledFeatureProduct className="feature-product">
      <div className="feature-product__media"><StyledProductLink to={url}><img src={img} className="img-fluid"/></StyledProductLink></div>
      <div className="feature-product__desc">
        <h2>
          <StyledProductLink to={url} href="product.html">
            <span className="feature-product__meta">{productMeta}</span><hr/>
            <span className="feature-product__title">{name}</span>
            <span className="feature-product__price">${price}</span>
          </StyledProductLink>
        </h2>
      </div>
    </StyledFeatureProduct>
  )
}