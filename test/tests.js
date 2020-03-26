const test = QUnit.test;

function sub(x, y) {

    return x - y;
}

test('sub', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const x = 6;
    const y = 4;
    const expected = 2;

    //Act 
    // Call the function you're testing and set the result to a const

    const diff = sub(x, y);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(diff, expected);
});


function multiply(x, y) {

    return x * y;
}

test('multiple', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const x = 6;
    const y = 4;
    const expected = 24;

    //Act 
    // Call the function you're testing and set the result to a const

    const mult = multiply(x, y);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(mult, expected);
});

function div(x, y) {

    return x / y;
}

test('divide', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const x = 8;
    const y = 4;
    const expected = 2;

    const a = 7;
    const b = 0;
    const expected2 = Infinity;
    //Act 
    // Call the function you're testing and set the result to a const

    const divided = div(x, y);
    const divided2 = div(a, b);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(divided, expected);
    assert.equal(divided2, expected2);
});

function isEven(x) {
    if(x % 2 === 0) {
        return true;
    } else return false;

}

test('isEven', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const x = 7;
    const expected = false;

    const y = 6;
    const expected2 = true;

    //Act 
    // Call the function you're testing and set the result to a const

    const isIteven = isEven(x);
    const isIteven2 = isEven(y);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(isIteven, expected);
    assert.equal(isIteven2, expected2);
});

function getNumbers(upTo) {
    const numbers = [];
    for(let i = 1; i <= upTo; i++) {
        if(isEven(i) === true) {
            numbers.push(i);
        }
    }
    return numbers;
}

test('getEvenNumbers', function(assert) {
    // arrange
    const upTo = 9;
    const expected = [2, 4, 6, 8];

    // act
    const numbers = getNumbers(upTo);

    //assert
    assert.deepEqual(numbers, expected);
});