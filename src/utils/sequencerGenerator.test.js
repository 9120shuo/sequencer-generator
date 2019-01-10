import * as sequencerGenerator from './sequencerGenerator'

describe('Sequencer Generator', () => {
  it('should generate correct sequencer', () => {
    expect(
      sequencerGenerator.generator(sequencerGenerator.factorialSequencer) instanceof
        sequencerGenerator.factorialSequencer
    ).toBe(true)
    expect(
      sequencerGenerator.generator(sequencerGenerator.fibonacciSequencer) instanceof
        sequencerGenerator.fibonacciSequencer
    ).toBe(true)
    expect(
      sequencerGenerator.generator(sequencerGenerator.primeSequencer) instanceof sequencerGenerator.primeSequencer
    ).toBe(true)
  })
})

describe('Factorial Sequencer', () => {
  let factorialGen
  beforeEach(() => {
    factorialGen = sequencerGenerator.generator(sequencerGenerator.factorialSequencer)
  })

  it('initial value is correct', () => {
    expect(factorialGen.value).toBe(1)
    expect(factorialGen.idx).toBe(0)
  })

  it('next function works', () => {
    factorialGen.next()
    expect(factorialGen.value).toBe(1)
    expect(factorialGen.idx).toBe(1)

    factorialGen.next()
    expect(factorialGen.value).toBe(2)
    expect(factorialGen.idx).toBe(2)

    factorialGen.next()
    expect(factorialGen.value).toBe(6)
    expect(factorialGen.idx).toBe(3)
  })

  it('next function works at a particular value', () => {
    factorialGen.value = 40320
    factorialGen.idx = 8

    factorialGen.next()
    expect(factorialGen.value).toBe(362880)
    expect(factorialGen.idx).toBe(9)

    factorialGen.next()
    expect(factorialGen.value).toBe(3628800)
    expect(factorialGen.idx).toBe(10)
  })

  it('value becomes NaN when it is larger than JS max safe integer (9007199254740991)', () => {
    factorialGen.value = 6402373705728000
    factorialGen.idx = 18

    factorialGen.next()
    expect(factorialGen.value).toBe(NaN)
    expect(factorialGen.idx).toBe(19)

    factorialGen.next()
    expect(factorialGen.value).toBe(NaN)
    expect(factorialGen.idx).toBe(20)
  })
})

describe('Fibonacci Sequencer', () => {
  let fibonacciGen
  beforeEach(() => {
    fibonacciGen = sequencerGenerator.generator(sequencerGenerator.fibonacciSequencer)
  })

  it('initial value is correct', () => {
    expect(fibonacciGen.value).toBe(1)
    expect(fibonacciGen.idx).toBe(1)
  })

  it('next function works', () => {
    fibonacciGen.next()
    expect(fibonacciGen.value).toBe(1)
    expect(fibonacciGen.idx).toBe(2)

    fibonacciGen.next()
    expect(fibonacciGen.value).toBe(2)
    expect(fibonacciGen.idx).toBe(3)

    fibonacciGen.next()
    expect(fibonacciGen.value).toBe(3)
    expect(fibonacciGen.idx).toBe(4)
  })

  it('next function works at a particular value', () => {
    fibonacciGen.value = 21
    fibonacciGen.idx = 8
    fibonacciGen.previousValue = 13

    fibonacciGen.next()
    expect(fibonacciGen.value).toBe(34)
    expect(fibonacciGen.idx).toBe(9)

    fibonacciGen.next()
    expect(fibonacciGen.value).toBe(55)
    expect(fibonacciGen.idx).toBe(10)
  })

  it('value becomes NaN when it is larger than JS max safe integer (9007199254740991)', () => {
    fibonacciGen.value = 8944394323791464
    fibonacciGen.idx = 78
    fibonacciGen.previousValue = 5527939700884757

    fibonacciGen.next()
    expect(fibonacciGen.value).toBe(NaN)
    expect(fibonacciGen.idx).toBe(79)

    fibonacciGen.next()
    expect(fibonacciGen.value).toBe(NaN)
    expect(fibonacciGen.idx).toBe(80)
  })
})

describe('Prime Sequencer', () => {
  let primeGen
  beforeEach(() => {
    primeGen = sequencerGenerator.generator(sequencerGenerator.primeSequencer)
  })

  it('initial value is correct', () => {
    expect(primeGen.value).toBe(2)
    expect(primeGen.idx).toBe(1)
  })

  it('next function works', () => {
    primeGen.next()
    expect(primeGen.value).toBe(3)
    expect(primeGen.idx).toBe(2)

    primeGen.next()
    expect(primeGen.value).toBe(5)
    expect(primeGen.idx).toBe(3)

    primeGen.next()
    expect(primeGen.value).toBe(7)
    expect(primeGen.idx).toBe(4)
  })

  it('next function works at a particular value', () => {
    primeGen.value = 19
    primeGen.idx = 8
    primeGen.knownPrime = [2, 3, 5, 7, 11, 13, 17, 19]

    primeGen.next()
    expect(primeGen.value).toBe(23)
    expect(primeGen.idx).toBe(9)

    primeGen.next()
    expect(primeGen.value).toBe(29)
    expect(primeGen.idx).toBe(10)
  })
})
