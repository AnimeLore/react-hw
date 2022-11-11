import {Layout} from "./components/Layout/Layout";
import "./fonts/fonts.css";
import {BookListPage} from "./pages/BookListPage/BookListPage";
import {BookDescPage} from "./pages/BookDescPage/BookDescPage";
import {categorys} from "./constants/mock";
import {Provider} from "react-redux";
import {store} from "./store";

export default function App() {
	return (
		<Provider store={store}>
			<Layout>
				<BookListPage/>
				{/*<BookDescPage/>*/}
			</Layout>
		</Provider>
	);
}
