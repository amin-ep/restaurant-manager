import { useForm } from "react-hook-form";
import { IAdminNotesPayload, IOrder } from "../../types/OrderTypes";
import LinkButton from "../ui/LinkButton";
import Textarea from "../ui/Textarea";
import StatHeading from "./StatHeading";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setAdminNote } from "../../services/orderApi";
import { toast } from "react-toastify";
import Loading from "../ui/Loading";
import styled from "styled-components";
import { CiEdit } from "react-icons/ci";
import { HiOutlineXMark } from "react-icons/hi2";
type Props = { adminNotes: IOrder["adminNotes"]; orderId: string };

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const EditToggleButton = styled.button`
  all: unset;
  cursor: pointer;
  color: var(--color-gray-950);

  border-radius: 6px;

  font-size: 16px;
  aspect-ratio: 1/1;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--color-emerald-500);
    background: var(--color-gray-200);
  }

  @media (min-width: 640px) {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    font-size: 26px;
  }
`;

function AdminNotes({ adminNotes, orderId }: Props) {
  const [editFormIsOpen, setEditFormIsOpen] = useState(false);

  return (
    <div>
      <Header>
        <StatHeading>Admin Notes</StatHeading>
        <EditToggleButton
          type="button"
          onClick={() => {
            setEditFormIsOpen((state) => !state);
          }}
        >
          {editFormIsOpen ? <HiOutlineXMark /> : <CiEdit />}
        </EditToggleButton>
      </Header>
      {adminNotes ? (
        <div>
          {!editFormIsOpen ? (
            <>
              <blockquote>{adminNotes.text}</blockquote>
            </>
          ) : (
            <Form
              onCloseEditForm={() => setEditFormIsOpen(false)}
              defaultText={adminNotes.text}
              orderId={orderId}
              mode="edit"
            />
          )}
        </div>
      ) : (
        <Form orderId={orderId} mode="create" />
      )}
    </div>
  );
}

function Form({
  mode,
  orderId,
  defaultText,
  onCloseEditForm,
}: {
  mode: "create" | "edit";
  orderId: string;
  defaultText?: string;
  onCloseEditForm?: () => void;
}) {
  const { register, handleSubmit, reset } = useForm<IAdminNotesPayload>();

  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: mutateAdminNote } = useMutation({
    mutationKey: ["order"],
    mutationFn: (text: string) => setAdminNote(text, orderId),
    onSuccess() {
      queryClient.invalidateQueries(["order"]).then(() => {
        toast.success("message sent successfully!");
        if (onCloseEditForm) {
          onCloseEditForm();
        }
      });
    },
  });

  useEffect(() => {
    if (mode === "edit" && defaultText) {
      reset({
        text: defaultText,
      });
    }
  }, [mode, defaultText]);

  const onSubmit = (data: IAdminNotesPayload) => {
    mutateAdminNote(data.text);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Textarea
        {...register("text", {
          required: {
            value: true,
            message: "Please add some texts.",
          },
          minLength: {
            value: 2,
            message: "Admin note should be at least 2 characters.",
          },
          maxLength: {
            value: 100,
            message: "Admin note cannot be more than 100 characters.",
          },
        })}
      />
      <LinkButton type="submit">{isCreating && <Loading />} Click</LinkButton>
    </form>
  );
}

export default AdminNotes;
