/**
 * Verifies if a string is comprised of valid sets of parenthesis.
 * @author racheldesa@outlook.com
 * @param {*} str a string comprised of ,(),[],{}
 * @returns true if the parentheses string is valid, false otherwise.
 */
var verifyParentheses = function(str) {
    let parenStack = [];
    for (let i=0;i<str.length;i++) {
        switch (str.charAt(i)) {
            case '(':
            case '[':
            case '{':
                parenStack.push(str.charAt(i));
                break;
            default:
                if (str.charAt(i) == ')' && parenStack.pop() == '(') {
                    continue;
                }
                else if (str.charAt(i) == ']' && parenStack.pop() == '[') {
                    continue;
                }
                else if (str.charAt(i) == '}' && parenStack.pop() == '{') {
                    continue;
                }
                else {
                    return false;
                }
        }
    }
    return true;
}