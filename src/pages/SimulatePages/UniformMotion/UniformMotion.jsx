export default function UniformMotion() {
    return (
        <div className="flex h-full">
            {/* SIDEBAR OPTION */}
            <div className="w-[300px] bg-blue-200"></div>
            <div className="flex flex-1 flex-col">
                {/* MAIN WORKSPACE */}
                <div className="relative flex-1 bg-orange-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                            width="300"
                            height="300"
                            xmlns="http://www.w3.org/2000/svg"
                            className="bg-violet-300"
                        >
                            <path d="M10 10" />
                            <circle cx="10" cy="10" r="4" fill="red" />
                        </svg>
                    </div>
                </div>

                {/* CONTROL */}
                <div className="h-[100px] bg-green-200"></div>
            </div>
        </div>
    );
}
