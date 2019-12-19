import React from 'react';
import './style/global.scss';
import  HomePage  from './pages/HomePage'
import  ContactPage  from './pages/ContactPage'
import StatisticPage  from './pages/StatisticPage'
import { Route, Switch } from 'react-router-dom'
import MainHeader from './components/MainHeader'
import ContactDetailsPage from './pages/ContactDetailsPage';
import ContactEditPage from './pages/ContactEditPage';


class App extends React.Component {
  render() {
    return (
      <section className="main-app">
        <MainHeader />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact/" component={ContactPage} />
          <Route exact path="/contact/edit/:id?" component={ContactEditPage} />
          <Route exact path="/contact/:id" component={ContactDetailsPage} />
          <Route exact path="/statistic" component={StatisticPage} />
        </Switch>
        <footer className="footer">
          <h1 className="logo">MisterBitcoin</h1>
          <p>&#xa9; Dror Uzi</p>
        </footer>
      </section>
    )
  }
}
export default App;

