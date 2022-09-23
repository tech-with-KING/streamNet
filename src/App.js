import React, { Component } from 'react';
import './App.css';
import Body from './body/body';
import Modal from './components/modalbox/modalbox'
import Articles from "./article_page/index"
import Article from "./article_page/article_list"
import Slide_Bar from './components/slidder/slidebar'
import Top_Bar from './nav/topbar'
import DownBar from './root/bottom_bar';
import Projects from "./projects_page/index"
import Menue_Bar from './nav/menue'
import {fetch_all_movies} from './api'
import { BrowserRouter as Router, Routes, Route,Outlet } from "react-router-dom"


class App extends Component {
    constructor(props){
	super(props);
	this.state = {
	    toggle: false,
	    movies :[]
    }}
    componentDidMount() {
	const api = async () => {
	    const {movies} = this.state
	    const ret = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c2dd11a7cca2cabc0ce2e539b616429&language=en')
	    const bar = await ret.json()
	    const newb = await [...ret]
	    console.log(newb)
	}
	api()

    }

    render() {
	const { toggle } = this.state
	const set_toggle = () => { toggle ? this.setState({ toggle: false }) : this.setState({ toggle: true }) }

	const home = () => {
	    return (
		    <>
		    </>
	    )
	}
	return (
			<>
				<Router>
					<Menue_Bar toggle={toggle} />
					<Routes>
		<Route path="/" element={<><Slide_Bar img_path ={this.state.bew} /><Top_Bar toggle={toggle} set_toggle={set_toggle} /><Body /></>} />
						<Route path="/articles" element={<><Top_Bar toggle={toggle} set_toggle={set_toggle} /><Article /></>} />
		<Route path="/projects" element={<><Top_Bar toggle={toggle} set_toggle={set_toggle} /><Projects /></>} />

						<Route path="/articles/one" element={<><Top_Bar toggfle={toggle} set_toggle={set_toggle} /><Articles /></>} />
					</Routes>
					<DownBar />
				</Router>

			</>
		);
	}
}

export default App;