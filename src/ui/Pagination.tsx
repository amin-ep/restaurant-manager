import styled from "styled-components";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p {
    color: var(--color-gray-8);
  }
`;

const PaginationButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  appearance: none;
  gap: 0.1rem;
  border: none;
  outline: 2px solid transparent;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  background-color: transparent;
  color: var(--color-gray-8);
  padding: 0.3rem 0.5rem;
  border-radius: 6px;
  transition: 0.3s;

  &:hover:not(:disabled) {
    color: var(--color-green-1);
  }

  &:focus {
    outline: 2px solid var(--color-green-2);
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

function Pagination({
  count,
  totalPages,
}: {
  count: number | null;
  totalPages: number;
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage: string | null = searchParams.get("page");

  const prevPage = () => {
    if (currentPage) {
      searchParams.set("page", (Number(currentPage) - 1).toString());
    }
    setSearchParams(searchParams);
  };

  const nextPage = () => {
    if (!currentPage) {
      searchParams.set("page", "2");
    } else {
      searchParams.set("page", (Number(currentPage) + 1).toString());
    }
    setSearchParams(searchParams);
  };

  return (
    <StyledPagination>
      <p>
        <span>{count}</span> results | page <span>{currentPage}</span> of{" "}
        <span>{totalPages}</span>
      </p>

      <PaginationButtonWrapper>
        <Button
          onClick={prevPage}
          disabled={!currentPage || currentPage === "1"}
        >
          <HiChevronLeft size={22} />
          Previous
        </Button>
        <Button
          onClick={nextPage}
          disabled={
            typeof currentPage === "string" &&
            Number(currentPage) === totalPages
          }
        >
          Next
          <HiChevronRight size={22} />
        </Button>
      </PaginationButtonWrapper>
    </StyledPagination>
  );
}

export default Pagination;
