function sequencer() {
  this.value = 1
  this.idx = 0
}
sequencer.prototype.next = function() {
  this.idx += 1
}

export const factorialSequencer = function() {
  sequencer.call(this)
}

factorialSequencer.prototype.next = function() {
  sequencer.prototype.next.call(this)
  this.value = this.value * this.idx
  this.value = this.value <= Number.MAX_SAFE_INTEGER ? this.value : NaN
}

export const fibonacciSequencer = function() {
  sequencer.call(this)
  this.idx = 1
  this.previousValue = 0
}

fibonacciSequencer.prototype.next = function() {
  sequencer.prototype.next.call(this)
  let temp = this.value
  this.value = this.previousValue + this.value
  this.value = this.value <= Number.MAX_SAFE_INTEGER ? this.value : NaN
  this.previousValue = temp
}

export const primeSequencer = function() {
  sequencer.call(this)
  this.idx = 1
  this.knownPrime = [2]
  this.value = 2
}

primeSequencer.prototype.next = function() {
  sequencer.prototype.next.call(this)
  for (let i = this.value; i <= Number.MAX_SAFE_INTEGER; i++) {
    let isPrime = !this.knownPrime.some(function(num) {
      return i % num === 0
    })
    if (isPrime) {
      this.value = i
      this.knownPrime.push(i)
      return
    }
  }
  this.value = NaN
}

export const generator = function(seqFunction) {
  return new seqFunction()
}
