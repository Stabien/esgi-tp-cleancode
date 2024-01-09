const getBillFromData = (data) => {
  let value = 0;
  const reductionType = {
    ["STANDARD"]: 1,
    ["HALF"]: 0.5,
    ["TENTH"]: 0.9,
  }

  const specialReductions = ["HALF_FIRST", "HALF_LAST", "SPECIAL"]

  const countryConversion = {
    ["FR"]: {value : 1, sign : "€"},
    ["US"]: {value : 3, sign : "$"},
    ["UK"]: {value : 2, sign : "£"}
  }
  
  const values = data.prices.map((price, index) => {
    let value = price * data.quantities[index]

    if (reductionType[data.reduction]) {
      value *= reductionType[data.reduction]
    } else {
      if (data.reduction === specialReductions[0] && index <= (index / 2)) {
        value *= 0.5
      }

      if (data.reduction === specialReductions[1] && index > (index / 2)) {
        value *= 0.5
      }

      if (data.reduction === specialReductions[2]) {
        value *= (index + 1) > 5 ? 0.5 : 1 - (index + 1) * 0.1 
      }
    }
    return value
  })

  const sum = values.reduce((acc, currentValue) => acc + currentValue)
  const billValue = sum * countryConversion[data.country].value;
  return `${billValue} ${countryConversion[data.country].sign}`
}

module.exports = getBillFromData;