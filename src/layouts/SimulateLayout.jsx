export default function SimulateLayout({ children }) {
    return (
        <div className="flex h-screen flex-col">
            <header className="flex h-h-header items-center border-b px-p-body">
                <div className="flex items-center space-x-3">
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-7 w-7"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                            />
                        </svg>
                    </button>
                    <h1 className="text-xl font-bold">Chuyển động thẳng đều</h1>
                </div>
            </header>
            <main className="flex-1">{children}</main>
        </div>
    );
}
