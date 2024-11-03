import { useParams } from "react-router-dom";

function Pizza() {
  const { id } = useParams();
  console.log(id);
  return <div></div>;
}

export default Pizza;
