import { Provider } from "react-redux";
import store from "./redux/store"  //通过createStore返回一个store
import App from "view"   
export default class App {
    render () {
        return (
            <Provider store = { store }>
                <App/>
            </Provider>
        )
    }
}