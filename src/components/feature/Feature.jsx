import React from 'react'
import './feature.css'
export default function Feature({ title, text }) {
    return (
        <div className='gpt3__features-container__feature'>
            <div className="gpt3__features-container__feature-title" style={{ flex: 2 }}>
                <div />
                <h1>{title}</h1>
            </div>
            <div className="gpt3__features-container__feature-text" style={{ flex: 2 }}>
                <p style={{ color: "#81AFDD" }}>{text}</p>
            </div>
        </div>
    )
}
