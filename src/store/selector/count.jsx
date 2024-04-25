import { selector } from "recoil";
import { countAtom } from "../atoms/count";


 export const CountSelecor=selector({
    key:"CountSelecor",
    get:({get})=>{
        const count=get(countAtom)

        if(count%2==0){
            return <p>it is even</p>
        }
        else{
            return <p> it is odd</p>
        }
    }
})