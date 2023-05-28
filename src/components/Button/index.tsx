import { 
  StyledButton
} from './index.style';
interface ButtonType {
  children: JSX.Element|JSX.Element[]|string
  [k: string]: any
}
export default function Button (props: ButtonType) {
  const { classList, text, children, ...rest } = props;
  return (
    <StyledButton className={rest.className} disabled={rest.disabled} type="button" onClick={rest.onClick}>{children}</StyledButton>
  )
}