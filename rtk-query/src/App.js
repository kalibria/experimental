import {useGetAllDataQuery} from './redux';


function App() {

  const {data=[], isLoading} = useGetAllDataQuery();

  if(isLoading) return <h1>Loading...</h1>

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.userId}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
