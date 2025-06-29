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
        return (
            <div className="max-w-xs mx-auto my-6 p-6 rounded-2xl shadow-lg bg-gradient-to-br from-indigo-50 to-indigo-100 text-center">
                <div className="text-2xl font-bold text-indigo-700 mb-2">{this.props.name}</div>
                <div className="text-lg text-gray-700 mb-1">Age: {this.props.age}</div>
                <div className="text-lg text-gray-700 mb-1">City: {this.props.city}</div>
                <div className="text-lg text-gray-700 mb-2">Count: {count}</div>
                <button onClick={() => {
                    this.setState({ count: this.state.count + 1 })
                }}
                    className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition font-semibold mt-2"
                >Click</button>
            </div>
        )
    }
}

export default UserClass;