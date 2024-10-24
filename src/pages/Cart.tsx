import HeaderNav from "@/components/header/HeaderNav";
import { Container } from "@mui/material";
import Main from "@/ui/Main";
import CartTab from "@/components/cart/CartTab";

function Cart() {
  return (
    <>
      <HeaderNav position="fixed" />
      <Main>
        <Container maxWidth="md" className="mt-20 bg-white rounded-lg">
          <CartTab />
        </Container>
      </Main>
    </>
  );
}

export default Cart;
