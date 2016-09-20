import React from 'react'
import { render } from 'react-dom'

import { Link } from 'react-router'

const About = () => <div>About</div>;
const Inbox = (props) => <div>Inbox <Link to='/inbox/unread'>Unread</Link> {props.children}</div>;
const Home  = () => <div>Home</div>;
const Unread  = () => <div>Unread</div>;
const NotFound  = () => <div>404! page not found! <Link to ="/">Back to main</Link> </div>;

const App = React.createClass({

    componentDidMount(){

        console.log(this.props)
    },

    render() {

        return (
            <div className='container'>
                <h1>App React-router</h1>
                <ul>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/inbox'>Inbox</Link></li>
                </ul>
                {/* добавили вывод потомков */}
                {this.props.children}
            </div>
        )
    }
});


export {App, About,Inbox, Home,Unread, NotFound };