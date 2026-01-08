import { useNavigate } from 'react-router-dom'

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div className='notfound'>
      <h2>404 Not Found</h2>
      <p>The location you are looking for is not currently available on this site.</p>
      <button onClick={() => navigate(-1)}>
      ⬅ Go Back  
      </button>
    </div>
  )
}

export default Notfound