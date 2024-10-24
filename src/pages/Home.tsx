import Header from "../components/header/Header";
import Main from "../ui/Main";
import Meals from "../components/meals/Meals";

function Home() {
  return (
    <div>
      <div className="flex flex-col">
        <Header />
        <Main>
          <Meals />
        </Main>
      </div>
    </div>
  );
}

export default Home;
