import Header from './components/Header';

export default function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <main className="mt-h-header">{children}</main>
        </div>
    );
}
