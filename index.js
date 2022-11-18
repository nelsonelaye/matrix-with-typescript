function create_matrix(str, number_of_column, number_of_row) {
    var arr = str.split("");
    var column = number_of_column;
    var row = number_of_row;
    // the first for loop handles the number of rows created
    for (var i = 0; i < row; i++) {
        // holds new row data
        var row_data = [];
        // this second loop handles the number of column created
        for (var j = 0; j < column; j++) {
            if (arr[0] == undefined) {
                // do nothing
            }
            else {
                row_data.push(arr[0]);
                //remove first element from the array after adding it to the row data
                arr = arr.filter(function (x) { return x != arr[0]; });
            }
        }
        console.log.apply(console, row_data);
    }
}
create_matrix("123456789", 3, 3);
