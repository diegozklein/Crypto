import React from 'react'
import './Coin.css'

function Coin({ name, image, symbol, price, volume, priceChange, marketcap, high }) {
    return (
        <div className = 'coin-container'>
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">R${price}</p>
                    <p className="coin-volume">${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
                    ) : (<p className='coin-percent green'>{priceChange.toFixed(2)}%</p>)
                
                }
                <p class="coin-marketcap">
                    Mkt Cap: ${marketcap.toLocaleString()}
                </p>
                <p class="coin-high">
                    High 24: ${high}
                </p>
                </div>
            </div>
        </div>
    )
}

export default Coin
