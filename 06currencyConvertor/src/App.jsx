import { useState, useEffect } from 'react'
import { InputBox } from './Components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [lastAction, setLastAction] = useState("auto") // 'auto' or 'manual'

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
    setLastAction("auto")
  }

  const convert = () => {
    if (amount && currencyInfo[to]) {
      setConvertedAmount((amount * currencyInfo[to]).toFixed(5))
      setLastAction("manual")
    }
  }

  useEffect(() => {
    if (lastAction === "auto" && amount && currencyInfo[to]) {
      setConvertedAmount((amount * currencyInfo[to]).toFixed(5))
    }
  }, [amount, from, to, currencyInfo, lastAction])

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="w-full max-w-md mx-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/20">
          <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-600">
            <h1 className="text-white text-center text-xl font-bold py-2">Currency Converter</h1>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setFrom(currency)
                  setLastAction("auto")
                }}
                selectCurrency={from}
                onAmountChange={(value) => {
                  setAmount(value)
                  setLastAction("auto")
                }}
              />
            </div>

            <div className="relative w-full h-1 my-4">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-blue-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-blue-100 transition-colors"
                onClick={swap}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </button>
            </div>

            <div className="mb-8">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setTo(currency)
                  setLastAction("auto")
                }}
                selectCurrency={to}
                amountDisable
              />
            </div>

            <div className="text-center text-white/80 mb-2">
              <p className="text-sm">1 {from.toUpperCase()} = {currencyInfo[to]?.toFixed(6)} {to.toUpperCase()}</p>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg p-[2px]">
              <button 
                type="button"
                className="w-full bg-white/90 hover:bg-white text-blue-600 font-semibold py-3 rounded-lg transition-all"
                onClick={convert}
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </div>
          </div>
        </div>

        <div className="text-center text-white/60 mt-6 text-sm">
          <p>Exchange rates updated in real-time</p>
        </div>
      </div>
    </div>
  )
}

export default App