import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
    const dispatch = useDispatch();
    console.log(1)
    return (
        <Button
            type="small"
            onClick={() => {
                dispatch(deleteItem(pizzaId));
            }}
        >
            Delete
        </Button>
    );
}

export default DeleteItem;
