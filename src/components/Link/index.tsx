import {
  StyledLink
} from './index.style'

interface LinkType {
  children: React.ReactElement|String
  url: string
  [k: string]: any
}
export default function LinkBase(props: LinkType) {
  const { classList, children, url, ...rest } = props;
  return (
    <StyledLink to={url} className={rest.className}>{children}</StyledLink>
  )
}