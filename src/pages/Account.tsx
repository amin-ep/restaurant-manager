import styled from "styled-components";
import UpdateAccountForm from "../components/updateAccountForm/UpdateAccountForm";
import UpdatePasswordForm from "../components/updatePasswordForm/UpdatePasswordForm";

const StyledH1 = styled.h1`
  font-size: 30px;

  @media (max-width: 600px) {
    font-size: 25px;
  }
`;

function Account() {
  return (
    <div>
      <StyledH1>Update Your Account</StyledH1>
      <UpdateAccountForm />
      <StyledH1>Update Password</StyledH1>
      <UpdatePasswordForm />
    </div>
  );
}

export default Account;
