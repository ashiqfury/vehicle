import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
				<Route path="/home" exact>
					<Home />
				</Route>
				<Route path="/vehicle-master" exact>
					<VehicleMaster />
				</Route>
				<Route path="/vendor-master" exact>
					<VendorMaster />
				</Route>
				<Route path="/material-master" exact>
					<MaterialMaster />
				</Route>
				<Route path="/tyre-master" exact>
					<TyreMaster />
				</Route>
				<Route path="/tyre-retread-master" exact>
					<TyreRetreadMaster />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
