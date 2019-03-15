const tokenizer = require('postcss/lib/tokenize');
const Input = require('postcss/lib/input');

module.exports = {
  isInlineComment(token) {
    if (token[0] === 'word' && token[1].slice(0, 2) === '//') {
      const first = token;
      const bits = [];
      let last;

      while (token) {
        if (/\r?\n/.test(token[1])) {
          // If there are quotes, fix tokenizer creating one token from start quote to end quote
          if (/['"].*\r?\n/.test(token[1])) {
            // Add string before newline to inline comment token
            bits.push(token[1].substring(0, token[1].indexOf('\n')));

            // Get remaining input and retokenize
            let remainingInput = token[1].substring(token[1].indexOf('\n'));
            remainingInput += this.input.css.valueOf().substring(this.tokenizer.position());

            // Replace tokenizer to retokenize the rest of the string
            this.input = new Input(remainingInput);
            this.tokenizer = tokenizer(this.input);
          } else {
            // If the tokenizer went to the next line go back
            this.tokenizer.back(token);
          }
          break;
        }

        bits.push(token[1]);
        last = token;
        // eslint-disable-next-line no-param-reassign
        token = this.tokenizer.nextToken({ ignoreUnclosed: true });
      }

      const newToken = ['comment', bits.join(''), first[2], first[3], last[2], last[3]];

      this.inlineComment(newToken);
      return true;
    }
    return false;
  }
};
