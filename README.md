# wildcard_matching_leetcode_
Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where: 
- '?' Matches any single character. 
- '*' Matches any sequence of characters (including the empty sequence). 

The matching should cover the entire input string (not partial).


## Example 1:

- Input: s = "aa", p = "a"
- Output: false
- Explanation: "a" does not match the entire string "aa".

## Example 2:

- Input: s = "aa", p = '*' 
- Output: true
- Explanation: '*' matches any sequence.

## Example 3:

- Input: s = "cb", p = "?a"
- Output: false
- Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.

## LeetCode Submission Result

My solution achieved a runtime of 94ms, outperforming 88.89% of users with JavaScript, and utilized 54.36MB of memory, surpassing 83.01% of users with JavaScript in terms of memory efficiency on LeetCode.