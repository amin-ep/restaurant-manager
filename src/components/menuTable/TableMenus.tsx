import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HiOutlineInformationCircle, HiOutlineTrash } from "react-icons/hi2";
import { toast } from "react-toastify";
import { deletePizza } from "../../services/pizzaApi";
import { AxiosDataErrorProps } from "../../types/AxiosTypes";
import Menus from "../ui/Menus";
import { AxiosError } from "axios";

type Props = { pizzaId: string };

function TableMenus({ pizzaId }: Props) {
  const queryClient = useQueryClient();
  // Delete Pizza
  const { mutate: deletePizzaMutation, isLoading: isDeleting } = useMutation({
    mutationKey: ["pizzas"],
    mutationFn: deletePizza,
    onSuccess() {
      queryClient
        .invalidateQueries({
          queryKey: ["pizzas"],
        })
        .then(() => toast.success("Item deleted successfully"));
    },
    onError(err: AxiosError<AxiosDataErrorProps>) {
      toast.error(err.response?.data.message || "Something went wrong!");
    },
  });
  return (
    <Menus>
      <Menus.Button id={pizzaId} />
      <Menus.List id={pizzaId}>
        <Menus.Item
          icon={<HiOutlineInformationCircle size={30} />}
          label="More Info"
          to={`/menu/${pizzaId}`}
        />
        <Menus.Item
          icon={<HiOutlineTrash size={30} />}
          label={isDeleting ? "Deleting..." : "Delete"}
          onClick={() => {
            deletePizzaMutation(pizzaId);
          }}
        />
      </Menus.List>
    </Menus>
  );
}

export default TableMenus;
