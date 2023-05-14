
import styled from 'styled-components';

// mixin
export const StyledButtonIcon = styled.button`
  display: inline-flex;
  align-items: center;
  &::before {
    content: "";
    display: block;
    background-image: url(${({iconUrl}) => iconUrl || ''});
    background-repeat: no-repeat;
    width: ${({size}) => size || 0}px;
    height: ${({size}) => size || 0}px;
  }
`

export const StyledButton = styled.button`
`