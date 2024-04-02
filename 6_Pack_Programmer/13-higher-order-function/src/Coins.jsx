import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loader from './components/Loader';
import HOC from './HOC';
export const server = 'https://api.coingecko.com/api/v3';
// export const server = 'https://api.coingecko.com/api/v3/ping?x_cg_api_key=CG-2ec4Psoexuuyo5EqinVxvjne';

// const Coins = () => {
//   const [coins, setCoins] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false)

//   useEffect(() => {
//     const fetchCoins = async () => {
//       try {
//         const { data } = await axios.get(
//           `${server}/coins/markets?vs_currency=usd`
//         );
//         setCoins(data);
//         setLoading(false);
//       }
//       catch {
//         setError(true);
//         setLoading(false);
//       }
//     }
//     fetchCoins();
//   }, []);

//   if (error) 
//     return <div className='errorMessage' >{"Error While Fetching Coins."}</div>

//   return (    
//       <div className='container' >
//         {loading ? (
//           <Loader />
//         ) : (
//             <>
//               <main>
//                 {coins.map((i) => (
//                   <article key={i.name}>
//                     <img src={i.image} alt={'Img'} />
//                     <h2>{i.markert_rank_cap}</h2>
//                     <p>{i.name}</p>
//                     <span>$ { i.current_price }</span>
//                   </article>
//                 )) }
//               </main>
//             </>
//         )
//        }
//       </div>    
//   )
// }

// --------------------------------- using HOC 👇 ------------
const CoinsNewComponent = HOC('/coins/markets?vs_currency=usd');

// export default Coins
export default CoinsNewComponent