import {useGetAllDataQuery, useAddDataMutation} from './redux/dataApi';
import {useState} from 'react';


function App() {
const [count, setCount] = useState('');
const [newData, setNewData] = useState('')
  const {data=[], isLoading} = useGetAllDataQuery(count);
  const [addData, {isError}] = useAddDataMutation();

  const handleAddData = async () => {
    if(newData){
      await addData ({body: newData}).unwrap();
      setNewData('')
    }
  }

  if(isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <div>
        <input type="text" value={newData} onChange={(e)=>setNewData(e.target.value)}/>
        <button onClick={handleAddData}>Add text</button>
      </div>

      <div>
        <select value={count} onChange={(e) => setCount(e.target.value)}>
          <option value="">all</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
