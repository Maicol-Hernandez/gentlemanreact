import { useFetch } from './hooks'
import './App.css'

const url: string = 'https://jsonplaceholder.typicode.com/posts';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  // 
  const { data, error, loading } = useFetch<Post>(url);

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default App
