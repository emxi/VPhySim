import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="z-z-header fixed left-0 right-0 top-0 flex h-h-header items-center justify-between border-b bg-white px-p-body">
            <div className="flex items-center space-x-3">
                <button className="-ml-2 rounded px-2 py-2 hover:bg-gray-200">
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
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>
                <Link to="/" className="logo-font text-3xl font-[1000]">
                    <span className="text-primary-500">V</span>
                    <span className="text-blue-500">Phy</span>
                    <span className="text-green-500">Sim</span>
                </Link>
            </div>

            <div className="flex items-center space-x-2">
                <Link to="about" className="btn btn-primary">
                    Giới thiệu
                </Link>
            </div>
        </header>
    );
}
