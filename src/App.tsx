import cl from './App.module.css'
import GroupFilters from "./components/groupFilters/groupFilters.tsx";
import GroupList from "./components/groupList/groupList.tsx";
import {useEffect , useState} from "react";
import groupsRequest from "./service/groupsRequest/groupsRequest.tsx";
import {IGetGroupsResponse, IGroup} from "./interfaces/interfaces.ts";

function App() {
  const [groups, setGroups] = useState<IGroup[]>([])
  const [filter, setFilter] = useState({
    typeOfPrivacy: "",
    colorOfAvatar: "",
    friendsInGroup: "",
  })
  const [filteredGroups, setFilteredGroups] = useState<IGroup[]>([])
  useEffect(() => {
    (async () => {
      const res: IGetGroupsResponse | undefined = await groupsRequest.getAllGroups()
      if(res?.data) setGroups(res.data)
    })()
  }, []);
  const filterFunc = (group: IGroup) => {
    if (group.avatar_color !== (filter.colorOfAvatar || group.avatar_color)) return false;
    if (filter.typeOfPrivacy === "OPEN" && group.closed) return false;
    if (filter.typeOfPrivacy === "CLOSED" && !group.closed) return false;
    if (filter.friendsInGroup === "NO" && group.friends?.length) return false;
    if (filter.friendsInGroup === "YES" && !group.friends?.length) return false;
    return true;
  };
  useEffect(() => {
    setFilteredGroups(groups.filter(g => filterFunc(g)));
  }, [filter, groups]);
  return (
    <div className={cl.mainWrapper}>
      <GroupFilters colors={[...new Set([...groups.map(g => g.avatar_color)])]} filter={filter} setFilter={setFilter}/>
      <GroupList groups={filteredGroups}/>
    </div>
  )
}
export default App