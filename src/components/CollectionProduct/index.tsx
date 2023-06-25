import {
  StyledCollectionLink
} from './index.style';

interface BaseCollectionProduct {
  img: string
  name: string
  type: string
  url: string
}
export default function CollectionProduct(props: BaseCollectionProduct) {
  const {
    img,
    name,
    type,
    url
  } = props
  return (
    <StyledCollectionLink to={url}>
      <img src={img} className="img-fluid"/>
      <div className="collection-desc">
        <h2>{type}</h2>
        <h3>{name}</h3>
      </div>
    </StyledCollectionLink>
  )
}