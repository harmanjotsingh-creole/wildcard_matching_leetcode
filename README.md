# wildcard*matching_leetcode*

Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '\*' where:

- '?' Matches any single character.
- '\*' Matches any sequence of characters (including the empty sequence).

The matching should cover the entire input string (not partial).

## Example 1:

- Input: s = "aa", p = "a"
- Output: false
- Explanation: "a" does not match the entire string "aa".

## Example 2:

- Input: s = "aa", p = '\*'
- Output: true
- Explanation: '\*' matches any sequence.

## Example 3:

- Input: s = "cb", p = "?a"
- Output: false
- Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.

## LeetCode Submission Result

My solution achieved a runtime of 94ms, outperforming 88.89% of users with JavaScript, and utilized 54.36MB of memory, surpassing 83.01% of users with JavaScript in terms of memory efficiency on LeetCode.

## Important Logic

In this Question, case when '_' is in the pattern is the only challenging part.
'_' represent any sequence of characters (including the empty sequence).

If the current character in p is _, update the markers to the current positions of string and pattern, respectively, and only increment pattern marker. This step is crucial for handling cases where the _ can match multiple characters in s. After that start with matching string if any blocker comes then roll back to marker position and again start matching this method is called backtracking.

```
            case "*":
                if (p[j + 1] == null) {
                    return true;
                } else {
                    v = i;
                    y = j;
                    j++;
                }
                break;
            default:
                if (y != -1) {
                    i = v + 1;
                    j = y + 1;
                    v++;
                } else {
                    return false;
                }
```


This two case shows logic explained above ,
In which when '*' comes we store value of i and j in v and y respectively. Then again start matching string and if any blocker comes it goes in default which backtrack to v and y and then start matching again by incrementing value of v.