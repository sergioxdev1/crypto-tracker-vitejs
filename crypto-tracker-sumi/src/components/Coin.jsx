import { currencyFormat } from "../util";

const Coin = ({ coin }) => {

    return (
        <>
            <div className="grid grid-cols-3 sm:grid-cols-4 font-light p-2 m-2 rounded border-gray-200 border-2 hover:bg-gray-200">
                <div className="flex items-center gap-1 w-full">
                    <img className="w-6" src={coin.image} alt={coin.name} />
                    <p>{coin.name}</p>
                    <span className="text-xs">({coin.symbol})</span>
                </div>
                <span className="w-full text-left">{currencyFormat(coin.current_price)}</span>
                <span className={`flex gap-1 ${coin.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>
                    {coin.price_change_percentage_24h}
                </span>
                <div className="hidden sm:block">
                    <span>{currencyFormat(coin.market_cap)}</span>
                </div>
            </div>
        </>
    )
}

export default Coin
