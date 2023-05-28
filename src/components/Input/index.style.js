import styled from 'styled-components';
import {
  color,
} from 'common.style'

export const StyledInput = styled.input`
  border: 1px solid ${color.grayInputBorder};
  padding: 15px 20px 12px 20px;
  width: 100%;
  outline: none;
  color: ${color.grayText};
  font-size: 14px;
  &::placeholder {
    color: ${color.grayText};
  }
  &:focus {
    background-color: ${color.grayInputPlaceHolder};
  }
`