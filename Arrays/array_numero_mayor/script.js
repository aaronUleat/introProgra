var number = [10, 1, 55, 25, 35, 28], temp;
 for (var i = 0; i < number.length; i++)
    {
        for (var j = i + 1; j < number.length; j++)
        {
            if (number[i] > number[j])
            {
                temp =  number[i];
                number[i] = number[j];
                number[j] = temp;
            }
        }
    }
console.log(number);

