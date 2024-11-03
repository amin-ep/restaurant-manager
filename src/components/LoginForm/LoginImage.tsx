import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 350px;
  height: 100%;
  padding: 0;

  @media (max-width: 700px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 12px 0 0 12px;
`;

function LoginImage() {
  return (
    <ImageWrapper>
      <Image src="/public/images/chef-hand.jpg" alt="chef-hand" />
    </ImageWrapper>
  );
}

export default LoginImage;
