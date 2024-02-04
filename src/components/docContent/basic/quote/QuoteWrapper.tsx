import cls from "./QuoteWrapper.module.css";

interface QuoteWrapperProps {
    content: string
}

export default function QuoteWrapper({content}: QuoteWrapperProps) {
  return (
      <div className={cls.container}>
          <div className={cls.quoteIcon}>“</div>
          <div className={cls.text}>{content}</div>
      </div>
  );
}

