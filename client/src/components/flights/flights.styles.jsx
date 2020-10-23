import styled from 'styled-components';

export const FlightStyled = styled.table`
  width: 900px;
  table-layout: fixed;
  th:first-child, td:first-child {
    width: 50px;
  }
  th:nth-child(2), td:nth-child(2) {
    width: 150px;
  }
  th:nth-child(3), td:nth-child(3) {
    width: 100px;
  }
  th:nth-child(4), td:nth-child(4) {
    width: 100px;
  }
  th:nth-child(5), td:nth-child(5) {
    text-align: right;
    width: 200px;
  }
`;
