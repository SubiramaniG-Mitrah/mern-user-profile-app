const rotate = (k) => {
  const numbers = [1, 2, 3, 4, 5]
  const splitValues = numbers.slice(-k)
  console.log(`122 splitValues`,splitValues);
  const otherVal = numbers.splice(0,k+1)
  console.log(`122 otherVal`,otherVal);
  const rotatedVal = [...splitValues, ...otherVal]
  console.log(`122 rotatedVal`,rotatedVal);
  console.log("rotatedVal", new Set(rotatedVal))
}

rotate(3)