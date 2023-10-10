import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2.4rem;
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
