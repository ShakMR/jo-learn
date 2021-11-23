import hljs from "highlight.js";
import MarkdownIt from "markdown-it";

const markdown: MarkdownIt = MarkdownIt({
  html: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      const res
        = hljs.highlightAuto(str).value
      console.log(res)
      try {
        return (
          `<pre><code class="hljs">${hljs.highlightAuto(str).value}</code></pre>`
        );
      } catch (error) {
        console.error(error)
      }
    }
    return (
      '<pre><code class="hljs">' +
      markdown.utils.escapeHtml(str) +
      "</code></pre>"
    );
  },
});

export { markdown };
