function isValid() {
    const stack = [];
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (brackets[char]) {
            // If the current character is a closing bracket
            // Pop the top element from the stack and compare
            const topElement = stack.length === 0 ? '#' : stack.pop();
            if (topElement !== brackets[char]) {
                return false;
            }
        } else {
            // If the current character is an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // If the stack is empty, all brackets are closed properly
    return stack.length === 0;
}