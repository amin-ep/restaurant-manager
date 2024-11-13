import { Dispatch, SetStateAction } from "react";
import { FILE_URL } from "../../utils/constants";
import styled from "styled-components";
import { HiArrowUpTray } from "react-icons/hi2";

const StyledDiv = styled.div`
  width: 100%;
  height: 210px;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
  z-index: 10;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  cursor: pointer;
`;

const Span = styled.span`
  position: absolute;
  top: 40%;
  left: 40%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-green-1);
  border-radius: 999px;
  color: #ffffff;
`;

function UpdatePizzaFileInput({
  defaultValue,
  selectedImage,
  setSelectedImage,
}: {
  selectedImage: string | Blob | MediaSource;
  defaultValue: string;
  setSelectedImage: Dispatch<SetStateAction<string | Blob | MediaSource>>;
}) {
  return (
    <StyledDiv>
      <Img
        src={
          selectedImage !== "" && typeof selectedImage !== "string"
            ? URL.createObjectURL(selectedImage)
            : `${FILE_URL}/${defaultValue}`
        }
      />
      <Span>
        <HiArrowUpTray size={25} />
      </Span>
      <Input
        type="file"
        onChange={(e) => {
          const file = e?.target?.files![0];
          setSelectedImage(file);
        }}
      />
    </StyledDiv>
  );
}

export default UpdatePizzaFileInput;
