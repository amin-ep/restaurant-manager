import { Container } from "@mui/material";
import AuthSection from "../components/auth/AuthSection";
import AuthTab from "../components/auth/AuthTab";

function Signup() {
  return (
    <div className="white-navy-bg min-h-dvh overflow-auto">
      <Container className="my-20 grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-10">
        <AuthSection />
        <AuthTab />
      </Container>
    </div>
  );
}

export default Signup;
