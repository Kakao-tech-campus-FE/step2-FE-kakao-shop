import Button from "@/components/common/Button.component";
import ToastTable from "@/components/common/Toast/ToastTable.component";
import { useToast } from "@/hooks/useToast";

const ToastPage = () => {
  const { addToast } = useToast();
  const id = Date.now().toString(36) + Math.random().toString(36).substring(2);

  return (
    <>
      <Button
        onClick={() =>
          addToast({
            id,
            message: "this is a sucess message",
            title: "success",
            type: "success",
          })
        }
      >
        Click!!
      </Button>
      <Button
        onClick={() =>
          addToast({
            id,
            message: "this is a error message",
            title: "error",
            type: "error",
          })
        }
      >
        Click!!
      </Button>
      <Button
        onClick={() =>
          addToast({
            id,
            message: "this is a info message",
            title: "info",
            type: "info",
          })
        }
      >
        Click!!
      </Button>
      <Button
        onClick={() =>
          addToast({
            id,
            message: "this is a warning message",
            title: "warning",
            type: "warning",
          })
        }
      >
        Click!!
      </Button>
      <ToastTable />
    </>
  );
};

export default ToastPage;
