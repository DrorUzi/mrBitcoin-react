import React from 'react';
import '../style/global.scss'
import {Link} from 'react-router-dom'

export default function MainHeader(props) {
    return <div className="main-header">
        <h1 className="logo">MisterBitcoin</h1>
        <div className="pages">
        <Link to={`/`} >Home</Link>
        <Link to={`/contact`} >Contacts</Link>
        <Link to={`/statistic`} >Statistic</Link>
        </div>
    </div>
}