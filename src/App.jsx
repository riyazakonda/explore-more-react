
import './App.css'
import Counter from './counter'
import Tem from './tem'
import Users from './Usets'
import Friends from './friends'

function App() {
   
  function handleClick() {
    alert('click me button')
  }
  const handleClick2=()=>{
    alert('button click 2')
  }
  const addfive=(num)=>{
    alert(num+5)
  }

  return (
    <>
      <h3>React core concepts 2</h3>
      <Friends></Friends>
    <Users></Users>
      <Tem></Tem>

    <Counter></Counter>

      <button onClick={handleClick}>Click me</button>

      <button onClick={handleClick2}>click</button>

      <button onClick={()=>{alert('third click button')}}>third click</button>
      <button onClick={()=>addfive(3)}>forth click</button>
    </>
  )
}

export default App
