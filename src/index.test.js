const isPrime = require('./index')

describe("Basic", ()=>{
  it("Basic tests", () => {
    expect(isPrime(0)).toEqual(false)
    expect(isPrime(1)).toEqual(false)
    expect(isPrime(2)).toEqual(true)
    expect(isPrime(73)).toEqual(true)
    expect(isPrime(75)).toEqual(false)
    expect(isPrime(-1)).toEqual(false)
  })
  
  it("Test prime", () => {
    expect(isPrime(3)).toEqual(true)
    expect(isPrime(5)).toEqual(true)
    expect(isPrime(7)).toEqual(true)
    expect(isPrime(41)).toEqual(true)
    expect(isPrime(5099)).toEqual(true)
  })
  
  it("Test not prime", () => {
    expect(isPrime(4)).toEqual(false)
    expect(isPrime(6)).toEqual(false)
    expect(isPrime(8)).toEqual(false)
    expect(isPrime(9)).toEqual(false)
    expect(isPrime(45)).toEqual(false)
    expect(isPrime(-5)).toEqual(false)
    expect(isPrime(-8)).toEqual(false)
    expect(isPrime(-41)).toEqual(false)
  })
})
