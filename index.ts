function create_matrix(
  str: string,
  number_of_column: number,
  number_of_row: number
): any {
  let arr: (string | number)[] = str.split("");
  let column = number_of_column;
  let row = number_of_row;

  // the first for loop handles the number of rows created
  for (let i = 0; i < row; i++) {
    // holds new row data
    let row_data: (string | number)[] = [];

    // this second loop handles the number of column created
    for (let j = 0; j < column; j++) {
      if (arr[0] == undefined) {
        // do nothing
      } else {
        row_data.push(arr[0]);

        //remove first element from the array after adding it to the row data
        arr = arr.filter((x) => x != arr[0]);
      }
    }
    console.log(...row_data);
  }
}

create_matrix("123456789", 3, 3);
