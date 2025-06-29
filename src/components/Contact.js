import React from "react";

const Contact = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Contact Us</h2>
            <form style={styles.form}>
                <input
                    type="text"
                    placeholder="Your Name"
                    style={styles.input}
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    style={styles.input}
                    required
                />
                <textarea
                    placeholder="Your Message"
                    style={styles.textarea}
                    required
                />
                <button type="submit" style={styles.button}>
                    Send Message
                </button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "400px",
        margin: "40px auto",
        padding: "32px",
        background: "white",
        borderRadius: "16px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        fontFamily: "Segoe UI, sans-serif",
    },
    heading: {
        textAlign: "center",
        marginBottom: "24px",
        color: "#2d3748",
        letterSpacing: "1px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "16px",
    },
    input: {
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #cbd5e1",
        fontSize: "16px",
        outline: "none",
        transition: "border 0.2s",
    },
    textarea: {
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #cbd5e1",
        fontSize: "16px",
        minHeight: "80px",
        resize: "vertical",
        outline: "none",
        transition: "border 0.2s",
    },
    button: {
        padding: "12px",
        borderRadius: "8px",
        border: "none",
        background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        fontWeight: "bold",
        fontSize: "16px",
        cursor: "pointer",
        transition: "background 0.2s",
    },
};

export default Contact;