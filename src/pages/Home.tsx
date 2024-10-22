import Header from "../features/Header/Header";
import Main from "../ui/Main";
import Meals from "../features/Meals/Meals";

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
