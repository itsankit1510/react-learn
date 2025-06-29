import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        const { count } = this.state;
        const cardStyle = {
            maxWidth: "320px",
            margin: "40px auto",
            padding: "24px",
            borderRadius: "16px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
            background: "linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)",
            textAlign: "center",
            fontFamily: "'Segoe UI', Arial, sans-serif",
        };

        const nameStyle = {
            fontSize: "2rem",
            fontWeight: "700",
            color: "#3730a3",
            marginBottom: "12px",
        };

        const infoStyle = {
            fontSize: "1.1rem",
            color: "#334155",
            margin: "6px 0",
        };

        return <div style={cardStyle}>
            <div style={nameStyle}>{this.props.name}</div>
            <div style={infoStyle}>Age: {this.props.age}</div>
            <div style={infoStyle}>City: {this.props.city}</div>
            <div style={infoStyle}>Count: {count}</div>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count + 1
                })
            }}>Click</button>
        </div>
    }
}

export default UserClass;