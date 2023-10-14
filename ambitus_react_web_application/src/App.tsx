import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {

  //TODO: Check if user token is still valid so they can enter dashboard
  const navigate = useNavigate();

  useEffect(()=>{
    navigate("/login");
  })
  
  return (
    <>
      <p>Loading...</p>
    </>
  )
}

export default App
