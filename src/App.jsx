import React from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom } from './store/atoms/count'
import { CountSelecor } from './store/selector/count'

const App = () => {
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  )
}
function Count(){
  console.log("rerender")
  return (
    
    <div>
      <CountRanderer />
      <Buttons />
    </div>
  )
}
function CountRanderer(){
  const count=useRecoilValue(countAtom)
  const iseven=useRecoilValue(CountSelecor)
  return(
    <div>
     <b>{count}</b>
     <b>{iseven}</b>
    </div>
  )
}
function Buttons(){
const setCount=useSetRecoilState(countAtom);
  console.log("rerenderr button")
  return(
    <div>
      <button onClick={()=>{setCount(count=>count-1)}}>Decrement</button>
      <button onClick={()=>{setCount(count=>count+1)}}>Increment</button>
    </div>
  )
}
export default App