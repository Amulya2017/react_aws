import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from './Login'
import Logged from './Logged'
import loginAction from '../reduxFiles/actions'
import doctor from 'C:/Users/Amulya/Desktop/login-react-master/login-react-master/src/doctor.png';





var sectionStyle = {
alignItems: 'center',
   justifyContent: 'center',
  resizeMode:'contain',
  position: 'absolute',
  height: 'auto',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundImage: "url(" +  doctor  + ")"
};

class App extends React.Component {
    render() {
        return  (
        
        <section style={ sectionStyle }>
        <div className="container">
                    {React.cloneElement(this.props.children, this.props)}
                </div>
                </section>)
    }
}

App.propTypes = {
    loginAction: PropTypes.func.isRequired,
    isLogged: PropTypes.bool.isRequired,
    isWaiting: PropTypes.bool // actually not needed since `redux-form` provides the 'submitting' flag
}

const mapStateToProps = state => ({
    isLogged: state.loginReducer.isLogged,
    isWaiting: state.loginReducer.isWaiting
})

const mapDispatchToProps = dispatch => bindActionCreators({ 
    loginAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)