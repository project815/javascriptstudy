interface Array<T> {
    /**
     * Gets or sets the length of the array. This is a number one higher than the highest index in the array.
     * 배열의 길이를 가져오거나 설정합니다. 이것은 배열에서 가장 높은 색인보다 하나 높은 숫자입니다. a[3] => length = 4
     */
    length: number;
    /**
     * Returns a string representation of an array.
     * 배열의 문자열 표현을 반환합니다.
     */
    toString(): string;
    /**
     * Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.
     * 배열의 문자열 표현을 반환합니다. 요소는 toLocaleString 메서드를 사용하여 문자열로 변환됩니다.
     */
    toLocaleString(): string;
    /**
     * Removes the last element from an array and returns it.
     * If the array is empty, undefined is returned and the array is not modified.
     * 배열에서 마지막 요소를 제거하고 반환합니다.
     * 배열이 비어 있으면 undefined가 반환되고 배열이 수정되지 않습니다.
     */
    pop(): T | undefined;
    /**
     * Appends new elements to the end of an array, and returns the new length of the array.
     * @param items New elements to add to the array.
     * 배열 끝에 새 요소를 추가하고 배열의 새 길이를 반환합니다.
     * @param items 배열에 추가할 새 요소입니다.
     */
    push(...items: T[]): number;
    /**
     * Combines two or more arrays.
     * This method returns a new array without modifying any existing arrays.
     * @param items Additional arrays and/or items to add to the end of the array.
     * 두 개 이상의 배열을 결합합니다.
     * 이 메서드는 기존 배열을 수정하지 않고 새 배열을 반환합니다.
     * @param items 배열 끝에 추가할 추가 배열 및/또는 항목입니다.
     */
    concat(...items: ConcatArray<T>[]): T[];
    /**
     * Combines two or more arrays.
     * This method returns a new array without modifying any existing arrays.
     * @param items Additional arrays and/or items to add to the end of the array.
     * 두 개 이상의 배열을 결합합니다.
     * 이 메서드는 기존 배열을 수정하지 않고 새 배열을 반환합니다.
     * @param items 배열 끝에 추가할 추가 배열 및/또는 항목입니다.
     */
    concat(...items: (T | ConcatArray<T>)[]): T[];
    /**
     * Adds all the elements of an array into a string, separated by the specified separator string.
     * @param separator A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
     * 배열의 모든 요소를 ​​지정된 구분자 문자열로 구분하여 문자열에 추가합니다. 
     * 이 스트링은 배열의 한 요소를 다음 요소와 구분하는데 사용되는 문자열입니다. 생략하면 배열 요소가 쉼표로 구분됩니다.
    */
    join(separator?: string): string;
    /**
     * Reverses the elements in an array in place.
     * This method mutates the array and returns a reference to the same array.
     * 제자리에서 배열의 요소를 뒤집습니다.
     * 이 메서드는 배열을 변경하고 동일한 배열에 대한 참조를 반환합니다.
     */
    reverse(): T[];
    /**
     * Removes the first element from an array and returns it.
     * If the array is empty, undefined is returned and the array is not modified.
     * 배열에서 첫 번째 요소를 제거하고 반환합니다.
     * 배열이 비어 있으면 undefined가 반환되고 배열이 수정되지 않습니다.
     */
    shift(): T | undefined;
    /**
     * Returns a copy of a section of an array.
     * For both start and end, a negative index can be used to indicate an offset from the end of the array.
     * For example, -2 refers to the second to last element of the array.
     * @param start The beginning index of the specified portion of the array.
     * If start is undefined, then the slice begins at index 0.
     * @param end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
     * If end is undefined, then the slice extends to the end of the array.
     * 
     * 배열 섹션의 복사본을 반환합니다.
     * 시작과 끝 모두 음수 인덱스를 사용하여 배열 끝에서 오프셋을 나타낼 수 있습니다.
     * 예를 들어 -2는 배열의 마지막 요소에서 두 번째를 나타냅니다.
     * @param start 배열의 지정된 부분의 시작 인덱스입니다.
     * start가 정의되지 않은 경우 슬라이스는 인덱스 0에서 시작합니다
     * @param end 배열의 지정된 부분의 끝 인덱스입니다. 이것은 인덱스 'end'에 있는 요소를 제외합니다.
     * end가 정의되지 않은 경우 슬라이스는 배열의 끝까지 확장됩니다.
     */
    slice(start?: number, end?: number): T[];
    /**
     * Sorts an array in place.
     * This method mutates the array and returns a reference to the same array.
     * @param compareFn Function used to determine the order of the elements. It is expected to return
     * a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
     * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
     * ```ts
     * [11,2,22,1].sort((a, b) => a - b)
     * ```
     * 
     * 제자리에 배열을 정렬합니다.
     * 이 메서드는 배열을 변경하고 동일한 배열에 대한 참조를 반환합니다.
     * @param compareFn 요소의 순서를 결정하는 데 사용되는 함수입니다. 돌아올 것으로 예상된다
     * 첫 번째 인수가 두 번째 인수보다 작으면 음수 값, 같으면 0, 양수
     */
    sort(compareFn?: (a: T, b: T) => number): this;
    /**
     * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
     * @param start The zero-based location in the array from which to start removing elements.
     * @param deleteCount The number of elements to remove.
     * @returns An array containing the elements that were deleted.
     * 
     * 배열에서 요소를 제거하고 필요한 경우 해당 위치에 새 요소를 삽입하여 삭제된 요소를 반환합니다.
     * @param start 요소 제거를 시작할 배열의 0부터 시작하는 위치입니다.
     * @param deleteCount 제거할 요소의 수입니다.
     * @returns 삭제된 요소를 포함하는 배열입니다.
     */
    splice(start: number, deleteCount?: number): T[];
    /**
     * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
     * @param start The zero-based location in the array from which to start removing elements.
     * @param deleteCount The number of elements to remove.
     * @param items Elements to insert into the array in place of the deleted elements.
     * @returns An array containing the elements that were deleted.
     * 
     * 배열에서 요소를 제거하고 필요한 경우 해당 위치에 새 요소를 삽입하여 삭제된 요소를 반환합니다.
     * @param start 요소 제거를 시작할 배열의 0부터 시작하는 위치입니다.
     * @param deleteCount 제거할 요소의 수입니다.
     * @param items 삭제된 요소 대신 배열에 삽입할 요소입니다.
     * @returns 삭제된 요소를 포함하는 배열입니다.
     */
    splice(start: number, deleteCount: number, ...items: T[]): T[];
    /**
     * Inserts new elements at the start of an array, and returns the new length of the array.
     * @param items Elements to insert at the start of the array.
     * 배열의 시작 부분에 새 요소를 삽입하고 배열의 새 길이를 반환합니다.
     * @param items 배열의 시작 부분에 삽입할 요소입니다.
     */
    unshift(...items: T[]): number;
    /**
     * Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
     * @param searchElement The value to locate in the array.
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
     * 배열에서 값이 처음 나타나는 인덱스를 반환하거나, 없으면 -1을 반환합니다.
     * @param searchElement 배열에서 찾을 값입니다.
     * @param fromIndex 검색을 시작할 배열 인덱스입니다. fromIndex를 생략하면 인덱스 0부터 검색을 시작합니다.
     */
    indexOf(searchElement: T, fromIndex?: number): number;
    /**
     * Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
     * @param searchElement The value to locate in the array.
     * @param fromIndex The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.
     * 배열에서 지정된 값이 마지막으로 나타나는 인덱스를 반환하거나, 없으면 -1을 반환합니다.
     * @param searchElement 배열에서 찾을 값입니다.
     * @param fromIndex 역방향 검색을 시작할 배열 인덱스입니다. fromIndex를 생략하면 배열의 마지막 인덱스에서 검색이 시작됩니다.
     */
    lastIndexOf(searchElement: T, fromIndex?: number): number;
    /**
     * Determines whether all the members of an array satisfy the specified test.
     * @param predicate A function that accepts up to three arguments. The every method calls
     * the predicate function for each element in the array until the predicate returns a value
     * which is coercible to the Boolean value false, or until the end of the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function.
     * If thisArg is omitted, undefined is used as the this value.
     */
    every<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[];
    /**
     * Determines whether all the members of an array satisfy the specified test.
     * @param predicate A function that accepts up to three arguments. The every method calls
     * the predicate function for each element in the array until the predicate returns a value
     * which is coercible to the Boolean value false, or until the end of the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function.
     * If thisArg is omitted, undefined is used as the this value.
     */
    every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
    /**
     * Determines whether the specified callback function returns true for any element of an array.
     * @param predicate A function that accepts up to three arguments. The some method calls
     * the predicate function for each element in the array until the predicate returns a value
     * which is coercible to the Boolean value true, or until the end of the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function.
     * If thisArg is omitted, undefined is used as the this value.
     */
    some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
    /**
     * Performs the specified action for each element in an array.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    /**
     * Calls a defined callback function on each element of an array, and returns an array that contains the results.
     * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
     */
    filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
     */
    filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
    /**
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    /**
     * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
    /**
     * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    /**
     * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
     */
    reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;

    [n: number]: T;
}