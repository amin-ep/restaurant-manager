import UpdateAccountForm from "../components/updateAccountForm/UpdateAccountForm";
import UpdatePasswordForm from "../components/updatePasswordForm/UpdatePasswordForm";

function Account() {
  return (
    <div>
      <h1>Update Your Account</h1>
      <UpdateAccountForm />
      <h1>Update Password</h1>
      <UpdatePasswordForm />
    </div>
  );
}

export default Account;
