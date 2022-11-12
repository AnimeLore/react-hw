import {Layout} from "./components/Layout/Layout";
import "./fonts/fonts.css";
import {BookListPage} from "./pages/BookListPage/BookListPage";
import {BookDescPage} from "./pages/BookDescPage/BookDescPage";
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Layout>
                    <Routes>
                        <Route index element={<BookListPage />}/>
                        <Route path="/book">
                            <Route path=":bookId" element={<BookDescPage />} /> {/* @TODO: Прикрутить роутинг по страницам */}  {/* @TODO: Сделать сервер */}  {/* @TODO: Протестить отзывы, книги да и в целом все */}
                        </Route>
                    </Routes>
                </Layout>
            </Provider>
        </BrowserRouter>
    );
}
