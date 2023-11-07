import { useDispatch } from "react-redux";
import { orderAction } from "../../redux/actions";
import "./Sort.classname.css";

export default function Sort() {
  const dispatch = useDispatch();

  const handlerSelect = (event) => {
    dispatch(orderAction(event.target.value));
  };

  return (
    <div className="st">
      <select onChange={handlerSelect}>
        <option value="A-Z">Ascendente</option>
        <option value="Z-A">Descendente</option>
        <option value="m">Mayor ataque</option>
        <option value="M">Menor ataque</option>
      </select>
    </div>
  );
}
