import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Topbar from './components/Topbar'
import VehicleMaster from './components/VehicleMaster'
import VendorMaster from './components/VendorMaster'
import MaterialMaster from './components/MaterialMaster'
import TyreMaster from './components/TyreMaster'
import TyreRetreadMaster from './components/TyreRetreadMaster'
import Home from './pages/Home'
import Login from './pages/Login'
import './scss/styles.scss'

const App = () => {
	return (
		<Router>
			<Topbar />
			<Switch>
				<Route path="/" exact>
					<Login />
				</Route>
				<Route path="/home">
					<Home />
				</Route>
				<Route path="/vehicle-master">
					<VehicleMaster />
				</Route>
				<Route path="/vendor-master">
					<VendorMaster />
				</Route>
				<Route path="/material-master">
					<MaterialMaster />
				</Route>
				<Route path="/tyre-master">
					<TyreMaster />
				</Route>
				<Route path="/tyre-retread-master">
					<TyreRetreadMaster />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
