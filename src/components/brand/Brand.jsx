import React from 'react'
import "./brand.css"
import { google, slack, atlassian, dropbox, shopify } from './imports'

export default function Brand() {
    return (
        <div className="gpt3__brand">
            <div>
                <img src={google} />
            </div>
            <div>
                <img src={slack} />
            </div>
            <div>
                <img src={atlassian} />
            </div>
            <div>
                <img src={dropbox} />
            </div>
            <div>
                <img src={shopify} />
            </div>
        </div>
    )
}
