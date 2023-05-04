import { useState } from 'react';
import useAxios from '../hooks/useAxios'
import Coin from './Coin';
import Pagination from './Pagination';

const TableMarketCoin = () => {
    const { response } = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false');

    const [search, setSearch] = useState('');

    let filteredCoin;
    if (response) {
        filteredCoin = response.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));
    }

    return (
        <section className='mt-8'>
            <h1 className='text-xl text-bold mb-2'> Markets: </h1>
            <div className='flex justify-end '>
                <label className='font-light flex items-center gap-1'>Search:</label>
                <input type="text" placeholder='coin name...' className="font-light p-2 m-2 rounded bg-gray-100 border-gray-300 border-2"
                    onChange={e => setSearch(e.target.value)} />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 font-light p-2 rounded border-gray-200 w-full">
                <div className="flex items-center gap-1 w-8">
                    Coin:
                </div>
                <div className="flex items-center gap-1 w-full">
                    Price (USD):
                </div>
                <div className="flex items-center gap-1 w-full">
                    Trending (Last 24 hrs):
                </div>
                <div className="flex items-center gap-1 w-full">
                    Market Cap (USD):
                </div>
            </div>
            {filteredCoin && filteredCoin.map(coin => <Coin key={coin.id} coin={coin} />)}
            <Pagination />
        </section>
    )
}

export default TableMarketCoin