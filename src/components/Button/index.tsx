interface ButtonType {
  children: JSX.Element|JSX.Element[]|string
  [k: string]: any
}
export default function Button (props: ButtonType) {
  const { classList, text, children, ...rest } = props;
  return (
    <button {...rest} type="button">{children}</button>
  )
}