function string_upper_case(arr) {
    let arr_upper = " " ; 
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == " ") {
            switch (arr[index + 1]) {
                case "a": arr[index + 1] = "A" ; break;
                case "b" : arr[index + 1] = "B" ; break ;
                case "c" : arr[index + 1] = "C" ; break ;
                case "d" : arr[index + 1] = "D" ; break ;
                case "e" : arr[index + 1] = "E" ; break ;
                case "f" : arr[index + 1] = "F" ; break ;
                case "g" : arr[index + 1] = "G" ; break ;
                case "h" : arr[index + 1] = "H" ; break ;
                case "k" : arr[index + 1] = "K" ; break ;
                case "l" : arr[index + 1] = "L" ; break ;
                case "m" : arr[index + 1] = "M" ; break ;
                case "n" : arr[index + 1] = "N" ; break ;
                case "o" : arr[index + 1] = "O" ; break ;
                case "p" : arr[index + 1] = "P" ; break ;
                case "q" : arr[index + 1] = "Q" ; break ;
                case "r" : arr[index + 1] = "R" ; break ;
                case "s" : arr[index + 1] = "S" ; break ;
                case "t" : arr[index + 1] = "T" ; break ;
                case "v" : arr[index + 1] = "V" ; break ;
                case "w" : arr[index + 1] = "W" ; break ;
                case "x" : arr[index + 1] = "X" ; break ;
                case "y" : arr[index + 1] = "Y" ; break ;
                case "z" : arr[index + 1] = "Z" ; break ;           
                default: break;
            }
        }
        
    }
    return arr ;
}

console.log(string_upper_case("the quick brown fox"))