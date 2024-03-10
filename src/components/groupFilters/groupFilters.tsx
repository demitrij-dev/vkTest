import cl from "./groupFilters.module.css"

interface IFilter {
  typeOfPrivacy: string,
  colorOfAvatar: string,
  friendsInGroup: string,
}
interface Props {
  setFilter: (s: any) => void
  filter: IFilter
  colors: (string | undefined)[]
}
const GroupFilters = (props: Props) => {
  const {filter, setFilter, colors} = props
  const changeFilter = (key: string, value: string) => {
    setFilter({...filter, [key]: value})
  }
  return (
    <div className={cl.filters}>
      <h3>Тип группы</h3>
      <div className={cl.buttons}>
        <button onClick={() => changeFilter("typeOfPrivacy", "")} style={{color: filter.typeOfPrivacy === "" ? "blue" : ""}}>Все</button>
        <button onClick={() => changeFilter("typeOfPrivacy", "OPEN")} style={{color: filter.typeOfPrivacy === "OPEN" ? "blue" : ""}}>Открытые</button>
        <button onClick={() => changeFilter("typeOfPrivacy", "CLOSED")} style={{color: filter.typeOfPrivacy === "CLOSED" ? "blue" : ""}}>Закрытые</button>
      </div>
      <h3>Друзья в группе</h3>
      <div className={cl.buttons}>
        <button onClick={() => changeFilter("friendsInGroup", "")} style={{color: filter.friendsInGroup === "" ? "blue" : ""}}>Не важно</button>
        <button onClick={() => changeFilter("friendsInGroup", "YES")} style={{color: filter.friendsInGroup === "YES" ? "blue" : ""}}>Есть</button>
        <button onClick={() => changeFilter("friendsInGroup", "NO")} style={{color: filter.friendsInGroup === "NO" ? "blue" : ""}}>Нет</button>
      </div>
      <select onChange={(e) => setFilter({ ...filter, colorOfAvatar: e.target.value })}>
        {colors.map((color) => (
          <option key={color} value={color}>{color === "" ? "Любой" : color}</option>
        ))}
      </select>
    </div>
  );
};

export default GroupFilters;