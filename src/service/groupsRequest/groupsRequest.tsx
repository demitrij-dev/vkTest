import { IGetGroupsResponse } from "../../interfaces/interfaces";
import groupsData from "../../../groups.json";

class GroupsRequest {
  getAllGroups(): Promise<IGetGroupsResponse | undefined> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const res: IGetGroupsResponse = {
            result: 1,
            data: groupsData
          };
          if (res.result === 0 || !res.data) {
            throw new Error("Bad response");
          }
          resolve(res);
        } catch (e) {
          console.log(e);
          reject(e);
        }
      }, 1000);
    });
  }
}

export default new GroupsRequest();
