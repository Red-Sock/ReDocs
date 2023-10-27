import "./wrapperQuote.css";

function wrapperQuote(props: string) {
  return (
    <div>
      <blockquote className="wrapQuote">
        <p className="wrapTextQuote">{props}</p>
      </blockquote>
    </div>
  );
}

export default wrapperQuote;
