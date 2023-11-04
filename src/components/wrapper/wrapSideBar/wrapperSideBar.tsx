import "./wrapperSideBar.css";

export default function WrapperSideBar(props: { content: string[] }) {
  return (
    <div className="wrapperSideBar">
      <header>
        <div>
          <span>
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 0L13 5V16L18 11.5V0ZM0 5V19.65C0 19.9 0.25 20.15 0.5 20.15C0.6 20.15 0.65 20.1 0.75 20.1C2.1 19.45 4.05 19 5.5 19C7.45 19 9.55 19.4 11 20.5V5C9.55 3.9 7.45 3.5 5.5 3.5C3.55 3.5 1.45 3.9 0 5ZM22 18.5V5C21.4 4.55 20.75 4.25 20 4V17.5C18.9 17.15 17.7 17 16.5 17C14.8 17 12.35 17.65 11 18.5V20.5C12.35 19.65 14.8 19 16.5 19C18.15 19 19.85 19.3 21.25 20.05C21.35 20.1 21.4 20.1 21.5 20.1C21.75 20.1 22 19.85 22 19.6V18.5Z"
                fill="black"
              />
            </svg>
            Title
          </span>
        </div>
      </header>
      <main>
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
      </main>
    </div>
  );
}
