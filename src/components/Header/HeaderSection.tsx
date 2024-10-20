import Button from "../../ui/Button";
import { GiFullPizza } from "react-icons/gi";

function HeaderSection() {
  return (
    <section className="grid grid-cols-1 grid-rows-[2fr_1fr_1fr] h-max items-center justify-center text-center">
      <div className="flex flex-col justify-center items-center text-pantone w-36 h-36 sm:w-44 sm:h-44 md:w-64 md:h-64 rounded-full border-2 border-pantone place-self-center">
        <GiFullPizza className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl" />
        <h1 className="text-[22px] sm:text-2xl md:text-3xl lg:text-4xl font-semibold font-dancing-script">
          Pizza Passion
        </h1>
      </div>
      <p className="text-xl">
        Pizza Passion, Order At Home & Eat At Home,
        <br /> One Click Away! Order Now!
      </p>
      <Button
        extraClasses="place-self-center"
        variation="primary"
        type="button"
      >
        Start Ordering
      </Button>
    </section>
  );
}

export default HeaderSection;
