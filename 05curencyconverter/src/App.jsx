import InputBox from "./components/InputBox";
import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyData = useCurrencyInfo(from);
  const options = Object.keys(currencyData || {});

  console.log("Currency Options:", options);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyData[to]);
  };
  const BackgroundImage =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA7gMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAADAgEABwT/xAAcEAEBAQEBAQEBAQAAAAAAAAAAAQIREjEhYUH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwDxnJImLjs5EyTKMkn+ATJcweS5EXk2R5LkNJkmYPJcwQmYuROYSA2RcZFQG8dWuBFRolRQFUaLYPUUFqC1DaFoA6FqGo9fADoWobQtQA6HS6HqCj0PX0mkUGZJIjMJkVeS5g4TIhclyLJcgXMLkeS5QJmFzBZLkCZXEZJkVcVExUBs+OrnFE1NUmgij1C0ehBaFqG1BaAOh6hdC0oLUFo2haEFoWoXUHoBaRSaHQZCZHCZFpMlyPJMgXJMjyTIFybIcmygXJILJcilyuDi4UJFREbKgt1Z13QZWV1TQZodXR1RGh6XoeqAtD2TQtCD0LRdC0qD0LRdC0A6ir0iqJi4OEyiwuSZFCZENkkFmlyKbJcgzS5qBsklFmrlFNKuUWauVAsrejlV0F9danrugrqLXdTaDrUVtRaYJ1R6+q1f0eqojQtE1RaoiNC0TYtKg9I18XoevgI0itqaomVeRyrlRSwmaHNJKBs0soM0maBpS5oJSZqD6M38XmglJnQp5VzQJVygbrZoXW9IF670P070gvqbU+mWgq6Ray1F0o7VHqttHqiM1RaqrR6oJ1Raq9UWqqM1R6rdVGqDLUdbai1RMqpRrlRosq80OaSUQ2aTNBmklQPmklBmklA+avNBmrlA80uaBNKmgP1voM03oF9Omh9d0CXTLodrLQVdIumXSLQVdI1U3SdaB2qPV/Hao9UHao9VuqO1RlqK21FoMtS61nQS5nXI0SVeaKKlENKuUMq5QPKuUEpJRD5q5QTSpoDzSpoMqpoDTTeh9N9AbrvQvTvQEumdH6ZdAu39Zai6RdAq1Oqm6RdA21Gqy1GqDrUWutRaDbR2utTaK61nXMBjmdajTZVyjbBCyrlDKqVaGlXNBlVKIaaXNAlVKB5pU0GV3oQ/p3oXpvoDeneg+v671/QL6ZdC9O9ATqLpPpNoKuk2ptTdCqukWstTaDrUWutTaDrU1zhXO6xyCOq7+JcjSpWpbFSNlVKhsohZVSilVKBZVSi62VahutlDNKlAvXeh9d0C9Z1HXdBfXeh9d0FXTPSestBVqeptT0oq1NrOptKrbU2st/GIN65jOg2s65iLGNc5Fc1zlGxznKimxjhFKjnA2Nc5Ua3rHA3ruscDq5jgcxzjVT1jnIMqWOBzHOFcxrgY5zkV/9k=";
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectedCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount="INR"
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                isAmountDisabled
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
