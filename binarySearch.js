/**
 * Given a sorted array of integers, conducts binary search 
 * to find if value val exists in array arr
 * @author racheldesa@outlook.com
 * @param {*} arr An array of integers sorrted in increasing order
 * @param {*} val The value to be searched for in arr
 * @returns 
 */
var binarySearch = function(arr, val) {
    let len = arr.length;
    let leftIdx = 0;
    let rightIdx = len - 1;
    while (leftIdx <= rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[midIdx] == val) {
            return true;
        }
        else if (arr[midIdx] > val) {
            rightIdx = midIdx - 1;
        }
        else {
            leftIdx = midIdx + 1;
        }
    }
    return false;
}