import {Layout} from "./components/Layout/Layout";
import "./fonts/fonts.css";
import {BookListPage} from "./pages/BookListPage/BookListPage";
import {BookDescPage} from "./pages/BookDescPage/BookDescPage";
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CartPage} from "./pages/CartPage/CartPage";

export default function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Layout>
                    <Routes>
                        <Route path="/category" element={<BookListPage/>}>
                            <Route path=":categoryId" element={<BookListPage/>}/>
                        </Route>
                        <Route path="/book">
                            <Route path=":bookId" element={<BookDescPage/>}/>
                        </Route>
                        <Route path="/cart" element={<CartPage/>}/>
                    </Routes>
                </Layout>
            </Provider>
        </BrowserRouter>
    );
}
