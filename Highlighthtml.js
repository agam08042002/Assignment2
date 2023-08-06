// highlightHTMLContent.js
function highlightHTMLContent(htmlContent, plainText, plainTextPositions) {
  // Convert plainTextPositions to HTML positions
  const htmlPositions = plainTextPositions.map(({ start, end }) => ({
    start: htmlContent.indexOf(plainText[start]),
    end: htmlContent.indexOf(plainText[end]) + plainText[end].length,
  }));

  // Highlight the HTML content
  let highlightedContent = htmlContent;
  htmlPositions.forEach(({ start, end }) => {
    highlightedContent = highlightedContent.substring(0, start) +
      `<mark>${highlightedContent.substring(start, end)}</mark>` +
      highlightedContent.substring(end);
  });

  return highlightedContent;
}

module.exports = highlightHTMLContent;
