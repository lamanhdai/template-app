import {
  Link
} from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  &:hover {
    color: rgba(110, 110, 110, 0.8);
    transition: all 0.25s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  }
`