export default function SimulateLayout({ children }) {
    return (
        <div className="flex h-screen flex-col">
            <header className="h-h-header bg-gray-100"></header>
            <main className="flex-1">{children}</main>
        </div>
    );
}
