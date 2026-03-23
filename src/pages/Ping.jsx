import styled from "styled-components";
import PingDatabase from "../features/ping/PingDatabase";

const PingContainer = styled.main`
  min-height: 100vh;

  display: grid;
  place-items: center;
`;

function Ping() {
  return (
    <PingContainer>
      <PingDatabase />
    </PingContainer>
  );
}

export default Ping;
