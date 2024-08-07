import axios from "axios";
import { serverApi } from "../../lib/config";
// import { Product, ProductInquiry } from "../../lib/types/product";
import { Member } from "../../lib/types/member";

class MemberService {
    private readonly path: string;

    constructor(){
        this.path = serverApi
    }

    public async getTopUsers(): Promise<Member[]> {
        try{
            let url = this.path + "/member/top-users";
            

            const result = await axios.get(url)

            console.log("Topusers result : ", result)

            return result.data

        }catch(err){
            console.log("Err on Topusers: ", err)
            throw err

        }

    }
    public async getRestaurnat(): Promise<Member> {
        try {
          const url = this.path + "/member/restaurant";
          const result = await axios.get(url);
          console.log("getRestaurant:", result);
    
          const restaurant: Member = result.data;
          return restaurant;
        } catch (err) {
          console.log("Error, getRestaurant", err);
          throw err;
        }
      }
}

export default MemberService