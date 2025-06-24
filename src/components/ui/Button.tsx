const style: {
  [key: string]: React.CSSProperties | { [key: string]: React.CSSProperties };
} = {
  button: {
    position: "relative",
    padding: "12px 24px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "var(--color-primary)",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  ".button::before": {
    content: "Click Me",
  },
};

const Button = ({ text, link }: { text: string; link: string }) => {
  return (
    <button style={style.button} onClick={() => (window.location.href = link)}>
      {text}
    </button>
  );
};

export default Button;
