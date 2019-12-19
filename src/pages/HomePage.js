import React from 'react';
import UserService from '../services/UserService';
import '../style/global.scss'
import coinsImg from '../assets/coins.png'
import bitcoin from '../assets/bitcoin.png'
import {connect} from 'react-redux';
import {loadRate} from '../stores/bitCoin/actions'
import {loadCurrUser} from '../stores/user/actions'

class HomePage extends React.Component {
    async componentDidMount() {
        this.props.loadCurrUser()
        this.props.loadRate()
    }
    render() {
        const { currUser,rate } = this.props
        return <>
        <div className="hero">
            <div className="hero-txt">
                <h2><span>New</span> Currency - <br />New <span>Lifestyle!</span></h2>
            </div>
            </div>
            {currUser && <section className="user-details-home">
            <h1>Welcome {currUser.name}!</h1>
            <div className="user-info-imgs">
                <div className="coins-img">
                    <img src={coinsImg} alt="bitcoin" />
                    <h2>Coins</h2>
                    <h3>{currUser.coins}</h3>
                </div>
                <div className="coins-img" alt="coins">
                    <img src={bitcoin} />
                    <h2>BTC</h2>
                    <h3>{rate}</h3>
                </div>
            </div>
        </section>}
       </>
    }
}



const mapStateToProps = (state) => {
    return {
        currUser : state.user.currUser,
        rate : state.bitCoin.rate
    }
}

const mapDispatchToProps = {
    loadRate,
    loadCurrUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)