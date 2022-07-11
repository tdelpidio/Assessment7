Results for the extraLargeArray
insert 767.434083 ms
append 2.147292 ms

Results for the largeArray
insert 6.631417 ms
append 446.875 μs

Results for the mediumArray
insert 154.792 μs
append 83.625 μs

Results for the smallArray
insert 37.25 μs
append 45.458 μs

Results for the tinyArray
insert 15.625 μs
append 53.208 μs



The append function that uses .push consistently decreased in time as the arrays got smaller. In this function he time increases and decreases at a consistent and predictable rate. The insert function uses .unshift which is slower because it also needs to unshift all the elements to the left once the first element is added.

The append function scales better because .push is O(1) where the insert function has .unshift which is 0(n).