import React from 'react';
import '../style/global.scss'
import BitcoinService from '../services/BitcoinService'
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { loadMarketPrice, loadTransactions } from '../stores/bitCoin/actions'


class StatisticPage extends React.Component {
    state = {
        priceData: null,
        transData: null
    }
    priceChart = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: '',
                backgroundColor: 'rgba(75,192,192,0.4)',
                data: []
            }
        ]
    }
    transChart = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: '',
                backgroundColor: 'rgba(247, 107, 107, 0.801)',
                data: []
            }
        ]
    }
    async componentDidMount() {
        await this.props.loadMarketPrice()
        await this.props.loadTransactions()
        var transData = this.props.transactions.values.map(value => value)
        this.transChart.datasets[0].data = transData
        var priceData = this.props.marketPrice.values.map(value => value)
        this.priceChart.datasets[0].data = priceData
        this.priceChart.datasets[0].label = this.props.marketPrice.name
        this.transChart.datasets[0].label = this.props.transactions.name
        this.setState({ priceData, transData })
    }

    render() {
        const { marketPrice, transactions } = this.props
        return (<section className="statistic-page">
            {marketPrice &&
                <Line data={this.priceChart} />
            }
            {transactions &&
                <Line data={this.transChart} />
            }
        </section>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        marketPrice: state.bitCoin.marketPrice,
        transactions: state.bitCoin.marketPrice
    }
}

const mapDispatchToProps = {
    loadTransactions,
    loadMarketPrice
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StatisticPage)