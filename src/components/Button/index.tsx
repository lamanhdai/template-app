import { 
  StyledButton,
  StyledButtonIcon
} from './index.style';
interface ButtonType {
  children: JSX.Element|JSX.Element[]|string
  [k: string]: any
}
export default function Button (props: ButtonType) {
  const { classList, text, children, ...rest } = props;
  return (
    rest.iconUrl ?
    <StyledButtonIcon {...rest} type="button">{children}</StyledButtonIcon>
    :<StyledButton {...rest} type="button">{children}</StyledButton>
  )
}