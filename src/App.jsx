import { Suspense } from "react";
import Footer from "./assets/Components/Footer";
import Issue from "./assets/Components/Issue";
import Managment from "./assets/Components/Managment";
import Navbar from "./assets/Components/Navbar";

const fetchIssues = async() =>{
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const fetchPromise = fetchIssues();
  


  return (
    <>
      <Navbar />

      


      <Suspense fallback={<span className="loading loading-dots loading-xl container mx-auto"></span>}>
        <Issue fetchPromise={fetchPromise}/>
      </Suspense>



      <Footer />
    </>
  );
}

export default App;
