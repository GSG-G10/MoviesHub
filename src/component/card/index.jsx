import React from 'react';
import Img from './noImg.jpg';
import './style.css'
function Card({data}) {
    return ( 
        <section className="resulte">
            <div className="all">
           {data.map((ele,index)=>{
               const {original_title,overview,poster_path,release_date,vote_count}=ele
              return <article key={index} className="card">
                        {
                            poster_path !== null?
                            <img className="img" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title}/>
                            :
                            <img   className="img" src={Img} alt={original_title}/>
                        }
                      

                        <h3 className="title">{original_title}</h3>
                        {
                            overview !== ''?
                            <p className="discription">{overview}</p>

                            :
                            <p className="discription">No Content</p>

                        }
                        {/* <p className="discription">{overview}</p> */}
                        <div className="info">
                        <span className="data">Data:{release_date}</span>
                        <span className="count">Vout Count :{vote_count}</span>

                        </div>
                      

               </article>
           })}
              </div>
        </section>
     );
}

export default Card;
