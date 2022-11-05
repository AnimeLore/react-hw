import { Layout } from "./components/Layout/Layout";
import "./fonts/fonts.css";
import { BookListPage } from "./pages/BookListPage/BookListPage";
import { BookDescPage } from "./pages/BookDescPage/BookDescPage";
import { categorys } from "./constants/mock";

export default function App() {
  return (
    <Layout>
      {/*<BookListPage categories={categorys} />*/}
      <BookDescPage categories={categorys} />
    </Layout>
  );
}
