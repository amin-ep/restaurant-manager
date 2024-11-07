import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  background-color: transparent;
  border: 1px solid var(--color-gray-2);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
  border-radius: 6px;
`;

const FilterButton = styled.button.attrs<{ $active: boolean }>((props) => ({
  $active: props.$active,
}))`
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--color-gray-8);
  ${(props) =>
    props.$active &&
    css`
      background-color: var(--color-green-1);
      color: var(--color-gray-0);
    `}

  border-radius: 6px;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-green-1);
    color: var(--color-gray-0);
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
}: {
  filter: string;
  options: { label: string; value: string }[];
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
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          onClick={() => {
            handleClick(option.value);
          }}
          key={option.value}
          $active={currentFilter === option.value}
          disabled={currentFilter === option.value}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}
