import { useDispatch, useSelector } from "react-redux";
import { filterOrigin, filterTypes, setPage } from "../../redux/actions";
import "./Filter.styles.css";

export default function Filters() {
  const dispatch = useDispatch();
  const { types } = useSelector((state) => state);

  const handlerSelect = (event) => {
    dispatch(filterOrigin(event.target.value));
    dispatch(setPage(0));
  };

  const handlerType = (event) => {
    dispatch(filterTypes(event.target.value));
    dispatch(setPage(0));
  };

  return (
    <div className="filt">
      <select onChange={handlerSelect}>
        <option value="Db">DataBase</option>
        <option value="Api">Api</option>
      </select>
      <hr />
      <select onChange={handlerType}>
        {types.map((el) => {
          return (
            <option value={el.name} key={el.id}>
              {el.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
