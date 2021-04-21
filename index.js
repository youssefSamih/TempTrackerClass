class TempTracker {
  constructor() {
    // initialize variables
    this.count = 0
    this.total = 0
    this._lowest = null
    this._highest = null
    this._average = null
  }

  insert(t) {
    // insert a new temperature
    if(this.count === 0) {
        this._lowest = t
        this._highest = t
    }
    if(t < this._lowest) this._lowest = t
    if(t > this._highest) this._highest = t
    this.total += t
    this.count++
    this._average = this.total / this.count
  };

  get highest() {
    // get the highest temperature we've seen so far
    return this._highest
  };

  get lowest() {
      // get the lowest temperature we've seen so far
      return this._lowest
  };

  get average() {
      // get the average of all temps we've seen so far
      return this._average
  };
}

const temp = new TempTracker();
temp.insert(10);
temp.insert(20);
temp.insert(30);
document.getElementById("Highest").innerHTML = "Highest temperature is " + temp.highest;
document.getElementById("Lowest").innerHTML = "Lowest temperature is " + temp.lowest;
document.getElementById("Average").innerHTML = "Average temperature is " + temp.average;