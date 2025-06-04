import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledFilter = styled.div<{ breakPoint: number }>`
  background-color: transparent;
  border: 1px solid var(--color-gray-200);
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
  border-radius: 6px;

  @media (max-width: ${(props) => props.breakPoint}px) {
    flex-direction: column;
    width: 100%;
  }
`;

const FilterButton = styled.button<{ active: "true" | "false" }>`
  background: ${(props) =>
    props.active === "false" ? "transparent" : "var(--color-emerald-500)"};

  border: none;
  cursor: pointer;
  color: ${(props) =>
    props.active === "false"
      ? "var(--color-gray-800)"
      : "var(--color-gray-50)"};

  border-radius: 6px;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.44rem 0.8rem;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background-color: var(--color-emerald-100);
  }

  &:focus {
    outline: 1px solid var(--color-green-1);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export default function Filter({
  filter,
  options,
  breakPoint,
}: {
  filter: string;
  options: { label: string; value: string }[];
  breakPoint: number;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filter) || options[0].value;

  const handleClick = (value: string) => {
    if (searchParams.get("page")) {
      searchParams.set("page", "1");
      setSearchParams(searchParams);
    }
    searchParams.set(filter, value);
    setSearchParams(searchParams);
  };

  return (
    <StyledFilter breakPoint={breakPoint}>
      {options.map((option) => (
        <FilterButton
          onClick={() => {
            handleClick(option.value);
          }}
          key={option.value}
          active={
            (currentFilter === option.value).toString() as "true" | "false"
          }
          disabled={currentFilter === option.value}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}
