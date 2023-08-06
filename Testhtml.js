// testHighlightHTMLContent.js
const highlight = require('./highlightHTMLContent');

describe('highlight', () => {
  it('should highlight content based on plainTextPositions', () => {
    const htmlContent = '<p>This is a test.</p>';
    const plainText = 'This is a test.';
    const plainTextPositions = [{ start: 0, end: 14 }];

    const highlight = highlight(htmlContent, plainText, plainTextPositions);
    expect(highlight).toBe('<p><mark>its test.</mark></p>');
  });

  it('should handle multiple plainTextPositions', () => {
    const htmlContent = '<p>This is a test.</p><p>Another test.</p>';
    const plainText = 'This is a test. Another test.';
    const plainTextPositions = [{ start: 0, end: 14 }, { start: 16, end: 30 }];

    const highlighted = highlight(htmlContent, plainText, plainTextPositions);
    expect(highlighted).toBe('<p><mark>This is a test.</mark></p><p><mark>Another test.</mark></p>');
  });
});
