import React, {useEffect, useState} from 'react'
import './statewise.css';
const Statewise = () => {
    const [data,setData] = useState([]);
    const getCovidDatastate =  async () =>{
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualDatastate = await res.json();
            console.log(actualDatastate.statewise);
            setData(actualDatastate.statewise);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCovidDatastate();
    }, []);
    return (
        <>
        <section>
            
           <div className="container  mt-5">
        <h2 className="m-3 text-center">StateWise Data</h2>
           <div className=" table-responsive ">
              <table className="table  table-bordered">
                <thead className="thead">
                    <tr>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                        <th>Active</th>
                        <th>Updated on</th>
                    </tr>

                </thead>
                <tbody>
                    {
                            data.map((curElem, ind) => {
                                return(
                                    <tr key={ind}>
                                    <td className="data">{curElem.state}</td>
                                    <td className="confirmed">{curElem.confirmed}</td>
                                    <td className="recovered">{curElem.recovered}</td>
                                    <td className="deaths">{curElem.deaths}</td>
                                    <td className="active">{curElem.active}</td>
                                    <td className="data">{curElem.lastupdatedtime}</td>
                                    </tr>
                                );
                            })
                    }
                   
                </tbody>
              </table>
               </div>
</div>
           
           </section>
        </>
    )
}

export default Statewise
