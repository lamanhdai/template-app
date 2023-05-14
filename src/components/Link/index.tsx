import {
  Link
} from 'react-router-dom';

interface LinkType {
  children: React.ReactElement|String
  url: string
  [k: string]: any
}
export default function LinkBase(props: LinkType) {
  const { classList, children, url, ...rest } = props;
  return (
    <Link to={url} {...rest}>{children}</Link>
  )
}