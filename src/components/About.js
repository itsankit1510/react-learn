// import React from 'react';
// import User from './User';
// import UserClass from './UserClass';

import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// const aboutStyles = {
//     container: {
//         maxWidth: '600px',
//         margin: '40px auto',
//         padding: '32px',
//         background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
//         borderRadius: '16px',
//         boxShadow: '0 6px 24px rgba(60,72,88,0.12)',
//         textAlign: 'center',
//     },
//     heading: {
//         fontSize: '2.5rem',
//         color: '#4f46e5',
//         marginBottom: '16px',
//         fontWeight: '700',
//         letterSpacing: '1px',
//     },
//     paragraph: {
//         fontSize: '1.2rem',
//         color: '#334155',
//         lineHeight: '1.7',
//     }
// };

// const About = () => {
//     return (
//         <div>
//             <div style={aboutStyles.container}>
//                 <h2 style={aboutStyles.heading}>About Us</h2>
//                 <p style={aboutStyles.paragraph}>
//                     Welcome to our website! We are passionate about building amazing web applications using <span style={{ color: '#6366f1', fontWeight: 'bold' }}>React</span>.
//                 </p>

//             </div>
//             <User name={"Ankitsingh"} age={123} city={"Pune"} />
//             <UserClass name={"Ankitsingh"} age={123} city={"Pune"} />
//         </div>

//     );
// };

// export default About;

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const aboutStyles = {
            container: {
                maxWidth: '600px',
                margin: '40px auto',
                padding: '32px',
                background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
                borderRadius: '16px',
                boxShadow: '0 6px 24px rgba(60,72,88,0.12)',
                textAlign: 'center',
            },
            heading: {
                fontSize: '2.5rem',
                color: '#4f46e5',
                marginBottom: '16px',
                fontWeight: '700',
                letterSpacing: '1px',
            },
            paragraph: {
                fontSize: '1.2rem',
                color: '#334155',
                lineHeight: '1.7',
            }
        };
        return <div>
            <div style={aboutStyles.container}>
                <h2 style={aboutStyles.heading}>About Us</h2>
                <p style={aboutStyles.paragraph}>
                    Welcome to our website! We are passionate about building amazing web applications using <span style={{ color: '#6366f1', fontWeight: 'bold' }}>React</span>.
                </p>
            </div>
            <User name={"Ankitsingh"} age={123} city={"Pune"} />
            <UserClass name={"Ankitsingh"} age={123} city={"Pune"} />
        </div>
    }
}

export default About;