function generateParenthesis(n) {
    const result = [];

    function backtrack(s, left, right) {
        // If the current combination is valid, add it to the result
        if (s.length === 2 * n) {
            result.push(s);
            return;
        }

        // Add an opening parenthesis if we haven't used up all of them
        if (left < n) {
            backtrack(s + '(', left + 1, right);
        }

        // Add a closing parenthesis if it makes a valid combination
        if (right < left) {
            backtrack(s + ')', left, right + 1);
        }
    }

    // Start the backtracking with an empty string and counts of left and right parentheses
    backtrack('', 0, 0);

    return result;
}