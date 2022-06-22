module.exports = function toReadable (number) {
// function toReadable (number) {
    var firstTen = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
    var secondTen = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
    var thirdTen = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    var firstThousand = ['hundred'];
    if (number < 10) {
        return firstTen[number];

    } else if (10 <= number && number < 20) {
        return secondTen[number - 10];

    } else if (20 <= number && number <= 99) {
        if (number % 10 == 0) {
            return thirdTen[Math.trunc(number / 10) - 2];
        }
        return thirdTen[Math.trunc(number / 10) - 2] + 
            ' ' + firstTen[number % 10];

    } else if (1 <= (number % 100) && (number % 100) < 10) {
        return firstTen[Math.trunc(number / 100)] + 
            ' ' + firstThousand + 
            ' ' + firstTen[number % 10];

    } else if (10 <= (number % 100) && (number % 100) < 20) {
        return firstTen[Math.trunc(number / 100)] + 
            ' ' + firstThousand +
            ' ' + secondTen[number % 10];

    } else if (number === 100 || (120 <= number && number <= 999)) {
        if (number % 100 == 0) {
            return firstTen[number / 100] + 
                ' ' + firstThousand;
        } if (number % 10 == 0) {
            return firstTen[Math.trunc(number / 100)] + 
                ' ' + firstThousand + 
                ' ' + thirdTen[Math.trunc((number % 100) / 10) - 2];
        }
        return firstTen[Math.trunc(number / 100)] + 
            ' ' + firstThousand + 
            ' ' + thirdTen[Math.trunc((number % 100) / 10) - 2] +
            ' ' + firstTen[number % 10];
    }
}

// console.log(toReadable(993))
