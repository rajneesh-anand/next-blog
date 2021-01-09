import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  // background-color: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  @media (min-width: 1600px) {
    padding: 25px 40px;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;

  a {
    margin-right: 1rem;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  a {
    margin-right: 1rem;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    list-style-type: none;
    display: flex;
  }
`;
