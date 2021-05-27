import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './covid.css';
const Covid = () => {
    const [data,setData] = useState([]);
    const getCovidData =  async () =>{
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>
        <section className="">
            <div className="text-center">
           <h1><img src="https://media.giphy.com/media/dXuW9b6Z7IKP1Pb9NS/giphy.gif" alt="live" className="live_img"></img></h1>
           <h2>Covid-19 CORONAVIRUS TRACKER</h2>
           </div>
           <div className=" mt-5  text-center container ">
               <div className="row justify-content-center ">
               <div className="card   text-center col-md-3 m-2 ">
                            <p className ="card_name  ">
                                COUNTRY
                            </p>
                            <p className="card_total">INDIA</p>
               </div>
               <div className="card  text-center col-md-3 card_recovered m-2">
                            <p className ="card_name ">
                            <i class="far fa-heart"></i> RECOVERED
                            </p>
                            <p className="card_total card_small ">{data.recovered}</p>
               </div>
               <div className="card  text-center col-md-3 m-2 card_confirmed">
                            <p className ="card_name">
                             <i class="fas fa-user-plus"></i>   CONFIRMED
                            </p>
                            <p className="card_total card_small">{data.confirmed}</p>
               </div>
               <div className="card text-center col-md-3  m-2 card_death">
                            <p className ="card_name">
                             <i class="fas fa-heartbeat"></i>   DEATHS
                            </p>
                            <p className="card_total card_small">{data.deaths}</p>
               </div>
               <div className="card text-center col-md-3 m-2 card_active">
                            <p className ="card_name">
                              <i class="fas fa-plus"></i>  ACTIVE
                            </p>
                            <p className="card_total card_small">{data.active}</p>
               </div>
               <div className="card  text-center col-md-3  m-2">
                            <p className ="card_name">
                             <i class="far fa-clock"></i>   LAST UPDATED
                            </p>
                            <p className="card_total card_small">{data.lastupdatedtime}</p>
                            </div>
               </div>
           </div>
           </section>
        </>
    )
}

export default Covid
