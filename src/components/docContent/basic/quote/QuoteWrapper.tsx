import "./QuoteWrapper.css";

export default function QuoteWrapper(content: string) {
  return (
    <div>
      <blockquote className="wrapQuote">
        <p className="wrapTextQuote">{content}</p>
      </blockquote>
    </div>
  );
}

