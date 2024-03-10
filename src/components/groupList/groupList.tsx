import cl from "./groupList.module.css"
import {IGroup} from "../../interfaces/interfaces.ts";
import GroupCard from "../groupCard/groupCard.tsx";

interface Props{
  groups: IGroup[]
}
const GroupList = (props: Props) => {
  return (
    <div className={cl.groupList}>
      {props.groups.map(group => (
        <GroupCard key={group.id} group={group}/>
      ))}
    </div>
  );
};

export default GroupList;