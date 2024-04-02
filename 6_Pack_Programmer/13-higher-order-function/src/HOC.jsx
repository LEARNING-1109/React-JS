import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './components/Loader';
export const server = 'https://api.coingecko.com/api/v3';


// const HOC = () => {
//   return (
//     <div>HOC</div>
//   )
// }

// const HOC = () => {
//     return () => {
//         return (
//             <div>HOC</div>
//         )
//     }
// }

// 🎯 Agar hmm curley bracket & return keyword naa lagaye iska matlab ye abhi bhi directly return kar rha hai
const HOC = (fetchingURL) =>
    function Func() {
        const [arr, setArr] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(false);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const { data } = await axios.get(
                        `${server}${fetchingURL}`
                    );
                    setArr(data);
                    setLoading(false);
                }
                catch {
                    setError(true);
                    setLoading(false);
                }
            }
            fetchData();
        }, []);


        if (error)
            return <div className='errorMessage' >{"Error While Fetching Coins."}</div>

        return (
            <div className='container' >
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <main>
                            {arr.map((i) => (
                                <article key={i.name}>
                                    <img src={i.image} alt={'Img'} />
                                    <h2>{i.markert_rank_cap}</h2>
                                    <p>{i.name}</p>
                                    <span>$ {i.current_price}</span>
                                </article>
                            ))}
                        </main>
                    </>
                )
                }
            </div>
        )
    }

// --------------------------------- using HOC 👇 ------------


export default HOC;