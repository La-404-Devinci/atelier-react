function Button({ color, children, onClick }) {
    return (
        <button
            style={{
                border: "none",
                backgroundColor: color,
                color: "white",
            }}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
