import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loader from './components/Loader';
export const server = 'https://api.coingecko.com/api/v3';
// export const server = 'https://api.coingecko.com/api/v3/ping?x_cg_api_key=CG-2ec4Psoexuuyo5EqinVxvjne';

const Exchanges = () => {
    const [exchanges, setExchanges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const { data } = await axios.get(
                    `${server}/exchanges`
                );
                setExchanges(data);
                setLoading(false);
            }
            catch {
                setError(true);
                setLoading(false);
            }
        }
        fetchExchanges();
    }, []);

    if (error)
        return <div className='errorMessage' >{"Error While Fetching Exchanges."}</div>

    return (
        <div className='container' >
            {loading ? (
                <Loader />
            ) : (
                <>
                    <main>
                        {exchanges.map((i) => (
                            <article key={i.name}>
                                <img src={i.image} alt={'Exchanges'} />
                                <h2>{i.trust_score_rank}</h2>
                                <p>{i.name}</p>
                            </article>
                        ))}
                    </main>
                </>
            )
            }
        </div>
    )
}

export default Exchanges