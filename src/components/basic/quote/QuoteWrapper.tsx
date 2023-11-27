import "./QuoteWrapper.css";

export function QuoteWrapper(props: string) {
  return (
    <div>
      <blockquote className="wrapQuote">
        <p className="wrapTextQuote">{props}</p>
      </blockquote>
    </div>
  );
}

