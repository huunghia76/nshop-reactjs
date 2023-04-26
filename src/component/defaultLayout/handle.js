import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export function handleClickOpenCart(){
    console.log('hi open')
    let idCart = document.getElementById("cart");
      idCart.classList.add('d-block');
      idCart.classList.add('transform');
      idCart.classList.remove('d-none');
  }
export function handleClickCloseCart(){
    console.log('hi close')
    let idCart = document.getElementById("cart");
    idCart.classList.add('d-none');
    idCart.classList.add('d-block');
  }
  
export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover,
  &.active {
    color: red !important;
  }
`;