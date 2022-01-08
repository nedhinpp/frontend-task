import React, {useState, useEffect} from 'react'
import axios from "axios";
import "./Home.css"
import Footer from '../Footer/Footer';


function Home() {
    const [flagData, setData] = useState([]);

    useEffect(() => {
        axios
          .get("https://restcountries.com/v2/all?fields=name,region,flag")
          .then((response) => {
            setData(response.data);
          });
      }, [])

    return (
        <div className="container">
    <h2 className='text-start heading'>Countries</h2>
    <div className="row">
  {flagData.map((obj, index) => {
      return (
        <div key={index} className='col-sm-12 col-lg-6 data-holder'>
            <div className='inner-holder'>
                <table>
                    <tr>
                        <td rowSpan={3}><img src={obj.flag} className='flag-holder'></img></td>
                    </tr>
                    <tr><td ><strong>{obj.name}</strong></td></tr>
                    <tr><td >{obj.region}</td></tr>

                    </table>
            </div>
        </div>
      );
   
})}
 </div>
<Footer/> 
</div>

 
    )
}

export default Home
