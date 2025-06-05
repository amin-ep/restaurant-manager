import styled from "styled-components";
import UpdateAccountForm from "../components/updateAccountForm/UpdateAccountForm";
import UpdatePasswordForm from "../components/updatePasswordForm/UpdatePasswordForm";
import useDocumentTitle from "../hooks/useDocumentTitle";

const StyledH1 = styled.h1`
  font-size: 30px;

  @media (max-width: 600px) {
    font-size: 25px;
  }
`;

function Account() {
  useDocumentTitle("Account");
  return (
    <div>
      <StyledH1 style={{ marginBottom: "1rem" }}>Update Your Account</StyledH1>
      <UpdateAccountForm />
      <StyledH1 style={{ marginTop: "3rem", marginBottom: "1rem" }}>
        Update Password
      </StyledH1>
      <UpdatePasswordForm />
    </div>
  );
}

export default Account;
