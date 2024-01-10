import { Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { getStudent, getState } from './selectors';
import { changeAge, changeSex } from './reducers';
import './App.less';

function App() {
  // const p = useSelector(getState)
  // console.log("🚀 ~ App ~ p:", p)

  const p = useSelector(getStudent)
  console.log("🚀 ~ App ~ p:", p)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        {/* <div>name:{name}</div>
        <div>age:{age}</div>
        <div>sex:{sex}</div> */}
        <div>
          <Button style={{ marginRight: "10px" }} onClick={() => { dispatch(changeAge()) }}>Button</Button>
          <Button type='primary' onClick={() => { dispatch(changeSex({ sex: 1 == "girl" ? "boy" : "girl" })) }}>Button</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
