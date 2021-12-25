# *Sorting-Visualizer*
#### Video Demo:  https://youtu.be/uZT2wh5CPaU
## Description:
Made with Vanilla JS, HTML and CSS, *Sorting-Visualizer* is a tool that provides a better visualization on how sorting algorithms
(mainly Bubble, Insertion, Selection and Merge) works with adjustable array lengths
and speed of how fast the algorithm will go.


#### index.html:
index.html is the main file of the project. It defines multiple sections of the 'homepage' also linking the sole CSS
stylesheet contained in the css folder called "style.css" and multiple JavaScripts performing their defined functions.


#### style.css:
Coming to our first folder which contains the stylesheet for the HTML file. styles.css defines the stylization,
the look and feel, of the whole webpage. The fonts, the colours and the whole arrangement is defined here.
The array container or the different standing rectangles are randomly generated flexboxes working in
accordance with .js files.


#### bubble.js:
This is for implementing Bubble Sort. Bubble Sort is the simplest sorting algorithm that works by repeatedly
swapping the adjacent elements if they are in wrong order. The color changes to blue when it has been traversed
once and red and yellow for comparing and swapping the two adjacent values and finally green for correct position.


#### insertion.js:
For implementing Insertion Sort. Insertion sort is a simple sorting algorithm that works similar to the way you
sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the
unsorted part are picked and placed at the correct position in the sorted part. Yellow represents current position,
red is the selected value, blue are the traversed positions and green is the sorted and final position.


#### selection.js:
For implementing Selection Sort. The selection sort algorithm sorts an array by repeatedly finding the minimum
element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two
subarrays in a given array:
1) The subarray which is already sorted.
2) Remaining subarray which is unsorted.
In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked
and moved to the sorted subarray. There are two 'red's: left red and right red. Left red shows the current value and
right red is the compared higher (in accordance with ascending order) value than that of the value before left red. Blue shows
the traversal or left-over array and green is the final position.


#### merge.js:
For implementing Merge Sort. Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself
for the two halves, and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r)
is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.
Yellow shows the continuous division of the whole array by half and red shows the comparison of values while green represents the final position.


#### main.js and visuals.js:
main.js is the core of these animations. It gives out command to run different .js files based on users input. It also updates the array by
randomly generating flexboxes of different heights which can represent different sizes (the smaller the height the lower the value). It updates
the array according to users input also disables other functions/buttons while one function is running.

visuals.js controls the repeated changes to the array and sets the speed of the algorithm representation also renables the buttons after the function is done running.

