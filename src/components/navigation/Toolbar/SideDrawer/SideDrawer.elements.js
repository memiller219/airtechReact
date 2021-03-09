import styled from 'styled-components'

export const Menu = styled.ul`
  display: none;
  align-items: center;
  list-style: none;
  text-align: center;
  padding: 0;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 40px;
    left: ${({ click }) => (click ? 0 : "-120%")};
    transition: all 0.5s ease;
    background: #141D24;
  }

`;


export const NavLinks = styled.a`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-weight: 100;
  height: 100%;

  @media screen and (max-width: 960px) {
      display: block !important;
    text-align: center;
    padding: 0 !important;
    margin-top: 10px;
    width: 100%;
    height: 50px !important;
    display: table;
    color: white;
    border-bottom: none !important;

    &:hover {
      transition: all 0.3s ease;
      font-weight: bolder;
    }
  }
`;
