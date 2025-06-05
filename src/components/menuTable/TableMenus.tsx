import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { HiOutlineInformationCircle, HiOutlineTrash } from "react-icons/hi2";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { toast } from "react-toastify";
import { deletePizza } from "../../services/pizzaApi";
import { AxiosDataErrorProps } from "../../types/AxiosTypes";
import Menus from "../ui/Menus";
import { useState } from "react";
import Alert from "../ui/Alert";

type Props = { pizzaId: string; pizzaName: string };

function TableMenus({ pizzaId, pizzaName }: Props) {
  const [alert, setAlert] = useState(false);
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
    <>
      <Menus>
        <Menus.Button id={pizzaId} />
        <Menus.List id={pizzaId}>
          <Menus.Item
            icon={<HiOutlineInformationCircle size={30} />}
            label="More Info"
            to={`/menu/${pizzaId}`}
          />
          <Menus.Item
            icon={<HiOutlinePencilSquare size={30} />}
            label="Edit"
            to={`/menu/${pizzaId}/edit`}
          />
          <Menus.Item
            icon={<HiOutlineTrash size={30} />}
            label={isDeleting ? "Deleting..." : "Delete"}
            onClick={() => {
              setAlert(true);
            }}
          />
        </Menus.List>
      </Menus>
      {alert && (
        <Alert
          action={() => deletePizzaMutation(pizzaId!)}
          actionTextContent="Delete"
          close={() => setAlert(false)}
          heading={`Delete "${pizzaName}"`}
          message="Are you sure you wanna delete this item?this would delete all the data of this pizza."
          isActionPending={isDeleting}
        />
      )}
    </>
  );
}

export default TableMenus;
