import { GiFullPizza } from "react-icons/gi";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

function AuthSection() {
  const navigate = useNavigate();

  return (
    <section className="hidden sm:flex text-left flex-col justify-center gap-12 text-dark-navy">
      <h1 className="font-semibold text-7xl flex items-center">
        <GiFullPizza />
        Pizza Passion
      </h1>
      <p className="text-3xl">
        Stay at Home, Order At home, Pay at Door!
        <br />
        <strong>Easy! Just Click and eat!</strong>
      </p>
      <Button variation="secondary" type="button" onClick={() => navigate("/")}>
        Back To Home
      </Button>
    </section>
  );
}

export default AuthSection;
