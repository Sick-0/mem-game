/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const MESSAGE = 'CC';

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

function convert(input) {
    let output = "";
    for (var i = 0; i < input.length; i++) {
        output += input[i].charCodeAt(0).toString(2);
    }

    return output;
}

function transform(binary) {
    let output = "";
    let previouschar = binary[0];
    let count = 0;
    let addSpace = true;
    for (var i = 0; i < binary.length; i++) {
        if (binary[i] == previouschar)
        {
            count++;
        }
        else
        {
            if (i == binary.length-1)
            {
                console.error("last one");
                addSpace = false;
            }
            output += getZeros(previouschar, count, addSpace);
            previouschar = binary[i];
            count = 1;
        }
    }
    return output
}

function getZeros(isOne, count, addSpace)
{
    let output = "";

    if (isOne == 1)
    {
        output = "0 ";
    }
    else
    {
        output = "00 "
    }

    for (i=0; i<count; i++)
    {
        output += "0";
    }

    if (addSpace)
    {
        output += " ";
    }

    return output;
}

let binary = convert(MESSAGE);

let answer = transform(binary);


console.log(answer);
