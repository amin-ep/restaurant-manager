import { createContext, ReactNode, useContext } from "react";
import styled from "styled-components";

interface Props {
  columns: string;
}

const StyledTable = styled.table`
  background: var(--color-gray-50);
  width: 100%;
  overflow-x: auto;
  border: 1px solid var(--color-gray-200);
  border-radius: 6px;
  padding: 0;
  display: flex;
  flex-direction: column;
  color: var(--color-gray-800);
`;

const TableHeader = styled.tr<Props>`
  padding: 0.5rem 0.8rem;
  border-radius: 6px 6px 0 0;
  background-color: var(--color-gray-100);
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  padding: 0;
  width: 850px;
`;

const TableContent = styled.tr<Props>`
  width: 850px;
  display: grid;
  grid-template-columns: ${(props) => props.columns};
`;

const TableHeadingCell = styled.th`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 16px;
`;

const TableDown = styled.td`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  flex-wrap: wrap;
  font-size: 15px;
  position: relative;
`;

const TableContext = createContext({
  columns: "",
});

function Table({
  children,
  columns,
}: {
  children: ReactNode;
  columns: string;
}) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable>{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }: { children: ReactNode }) {
  const { columns } = useContext(TableContext);
  return (
    <thead>
      <TableHeader columns={columns}>{children}</TableHeader>
    </thead>
  );
}

function Body({ children }: { children: ReactNode }) {
  const { columns } = useContext(TableContext);
  return (
    <tbody>
      <TableContent columns={columns}>{children}</TableContent>
    </tbody>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.HeadingCell = TableHeadingCell;
Table.BodyCell = TableDown;

export default Table;
