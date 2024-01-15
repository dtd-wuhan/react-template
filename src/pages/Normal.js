import React from 'react';
import { Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { getStudent } from '@/selectors';
import { changeAge, changeSex } from '@/reducers';

const App = () => {
    const { name, age, sex } = useSelector(getStudent)

    const dispatch = useDispatch()

    return (
        <div className="App">
            <div>name:{name}</div>
            <div>age:{age}</div>
            <div>sex:{sex}</div>
            <div>
                <Button style={{ marginRight: "10px" }} onClick={() => { dispatch(changeAge()) }}>Button</Button>
                <Button type='primary' onClick={() => { dispatch(changeSex({ sex: sex == "girl" ? "boy" : "girl" })) }}>Button</Button>
            </div>
        </div>
    );
};

export default App;