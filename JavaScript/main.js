//1
    const checkAge = age => age > 18 ? true : confirm ('Do you have your parents permission to access this page?')
    const result = checkAge(20);
    console.log(result);
//2

    const pow = (x, n) => n === 1 ? x : x * pow(x, n - 1);
    console.log(pow(3, 2));

//3
    const ask = (question, yes, no) => confirm(question) ? yes() : no();


//4
    let calculator = {
         read(){
            this.a = +prompt('Enter the first value:');
            this.b = +prompt('Enter the second value:');
        },
        sum (){
            return ('Sum result is : ' + (this.a + this.b)) 
        },
        mul(){
            return('Mul result is :' + (this.a * this.b) ) 
        },
    };
    
    calculator.read();
    alert(calculator.sum());
    alert(calculator.mul());

    

//5
const min = (a, b) => (a < b) ? a : b;