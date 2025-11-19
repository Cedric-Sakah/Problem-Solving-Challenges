// Problem:
// Given a non-empty array of distinct integers and a target sum, find all
// unique triplets in the array that sum to the target. Each triplet must be
// returned in ascending order, and the collection of triplets should also be
// ordered ascendingly by their values. If no such triplets exist, return []

/**
 * Find all triplets that sum to `targetSum`.
 *
 * Approach:
 * - Sort the array to make it easy to avoid duplicates and to use the two-pointer
 *   technique.
 * - For each value at index `i`, use two pointers (`left` and `right`) to find
 *   pairs that together with `array[i]` make the target sum.
 * - Move pointers inward based on the current sum compared to the target.
 
 */
function threeNumberSum(array, targetSum) {
  // Sort ascending so we can move pointers deterministically and produce
  // triplets in ascending order.
  array.sort((a, b) => a - b);

  const triplets = [];

  // We stop at `array.length - 2` because we need at least two numbers
  // after `i` to form a triplet.
  for (let i = 0; i < array.length - 2; i++) {
    // `left` starts immediately after `i`, `right` starts at the end.
    let left = i + 1;
    let right = array.length - 1;

    // Use two-pointer technique to find pairs that sum with array[i]
    // to the target. Because the array is sorted, we can increase
    // `left` to increase the sum or decrease `right` to decrease it.
    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];

      if (currentSum === targetSum) {
        // Found a valid triplet. Push a new array with the three
        // numbers in ascending order (they already are because the
        // overall array is sorted).
        triplets.push([array[i], array[left], array[right]]);

        // Move both pointers inward to continue searching. Note:
        // because the input is distinct integers, we don't need
        // to skip duplicates here, but if duplicates were allowed
        // we would advance past equal values.
        left++;
        right--;
      } else if (currentSum < targetSum) {
        // Sum too small -> need a larger value -> move left rightward
        left++;
      } else {
        // Sum too large -> need a smaller value -> move right leftward
        right--;
      }
    }
  }

  return triplets;
}


console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));

