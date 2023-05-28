import {
  StyledInput
} from './index.style'

interface InputType {
  type: string
  [k: string]: any
}

export default function Input(props: InputType) {
  const { type, ...rest } = props;
  return (
    <StyledInput type={type} className={rest.className} disabled={rest.disabled} placeholder={rest.placeholder} />
  )
}