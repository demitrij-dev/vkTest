import cl from "./groupCard.module.css"
import {IGroup} from "../../interfaces/interfaces.ts";
import {useState} from "react";

interface Props{
  group: IGroup
}
const GroupCard = (props: Props) => {
  const {group} = props
  const [showInfo, setShowInfo] = useState(false)
  const changeInfoMenu = () => {
    setShowInfo(showInfo => !showInfo)
  }
  return (
    <div className={cl.card}>
      <div className={cl.avatar} style={{backgroundColor: group.avatar_color ?? "white"}}></div>
      <div className={cl.info}>
        <div className={cl.name}>
          <h3>{group.name}</h3>
          <h5>{group.closed ? "Закрытая" : "Открытая"}</h5>
        </div>
        <div className={cl.subs}>
          <h3>{group.members_count} подписчиков</h3>
          {group.friends?.length &&
              <h5 onClick={changeInfoMenu}>{group.friends.length} друзей в группе</h5>
          }
          {showInfo &&
            (group.friends && group.friends.map(friend => (
              <h5 onClick={changeInfoMenu}>{friend.first_name} {friend.last_name}</h5>
            )))
          }
        </div>
      </div>
    </div>
  );
};

export default GroupCard;