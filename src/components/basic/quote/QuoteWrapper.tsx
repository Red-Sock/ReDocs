import "./QuoteWrapper.css";

function quoteWrapper(props: string) {
  return (
    <div>
      <blockquote className="wrapQuote">
        <p className="wrapTextQuote">{props}</p>
      </blockquote>
    </div>
  );
}

export default quoteWrapper;
