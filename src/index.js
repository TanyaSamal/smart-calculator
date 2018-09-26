class SmartCalculator {
  constructor(initialValue) {
    this.value = initialValue;
    this.operations = [];
  }

  parseOperations(){
    let result = this.value;
    while(this.operations.length > 0){
      for (let i = this.operations.length - 1; i >= 0; i--){
        if (this.operations[i][0] == 'pow'){
          if (i == 0) {
            result = Math.pow(result, this.operations[0][1]);
            this.operations.shift();
            //i++;
          } else {
            this.operations[i - 1][1] = Math.pow(this.operations[i - 1][1], this.operations[i][1]);
            this.operations.splice(i, 1);
            //i++;
          }
        }
      }
      for (let i = 0, len = this.operations.length; i < len; i++){
        if (this.operations[i][0] == 'multiply'){
          if (i == 0) {
            result *= this.operations[0][1];
            this.operations.shift();
            len--;
            i--;
          } else {
            this.operations[i - 1][1] = this.operations[i - 1][1] * this.operations[i][1];
            this.operations.splice(i, 1);
            len--;
            i--;
          }
        }
      }
      for (let i = 0, len = this.operations.length; i < len; i++){
        if (this.operations[i][0] == 'devide'){
          if (i == 0) {
            result = Math.round(result, this.operations[0][1]);
            this.operations.shift();
            len--;
            i--;
          } else {
            this.operations[i - 1][1] = Math.round(this.operations[i - 1][1] / this.operations[i][1]);
            this.operations.splice(i, 1);
            len--;
            i--;
          }
        }
      }
      for (let i = 0, len = this.operations.length; i < len; i++){
        if(this.operations[i][0] == 'subtract'){
          if (i == 0) {
            result -= this.operations[0][1];
            this.operations.shift();
            len--;
            i--;
          } else {
            this.operations[i - 1][1] = this.operations[i - 1][1] - this.operations[i][1];
            this.operations.splice(i, 1);
            len--;
            i--;
          }
        }
      }
      for (let i = 0, len = this.operations.length; i < len; i++){
        if(this.operations[i][0] == 'add'){
          if (i == 0) {
            result += this.operations[0][1];
            this.operations.shift();
            len--;
            i--;
          } else {
            this.operations[i - 1][1] = this.operations[i - 1][1] + this.operations[i][1];
            this.operations.splice(i, 1);
            len--;
            i--;
          }
      }
    }
  }
  this.value = result;
  return result;
}

  add(number) {
    this.operations.push(['add', number]);
    return this;
  }
  
  subtract(number) {
    this.operations.push(['subtract', number]);
    return this;
  }

  multiply(number) {
    this.operations.push(['multiply', number]);
    return this;
  }

  devide(number) {
    this.operations.push(['devide', number]);
    return this;
  }

  pow(number) {
    this.operations.push(['pow', number]);
    return this;
  }

  valueOf(){
    this.parseOperations();
    return this.value;
  }
}

module.exports = SmartCalculator;
