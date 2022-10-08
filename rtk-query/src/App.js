import {useGetGoodsQuery, useAddGoodsMutation, useDeleteGoodsMutation} from './redux/goodsApi';
import {useState} from 'react';


function App() {
const [count, setCount] = useState('');
const [newGoods, setNewGoods] = useState('')
  const {data=[], isLoading} = useGetGoodsQuery(count);
  const [addGoods, {isError}] = useAddGoodsMutation();
  const [deleteGoods] = useDeleteGoodsMutation();

  const handleAddGoods = async () => {
    if(newGoods){
      await addGoods ({name: newGoods}).unwrap();
      setNewGoods("")
    }
  }

  const handleDeleteGoods = async (id) => {
    await deleteGoods(id).unwrap()
  }

  if(isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <div>
        <input type="text" value={newGoods} onChange={(e)=>setNewGoods(e.target.value)}/>
        <button onClick={handleAddGoods}>Add text</button>
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
          <li key={item.id} onClick={()=>handleDeleteGoods(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
