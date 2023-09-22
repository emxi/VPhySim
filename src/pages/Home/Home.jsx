import { Link } from 'react-router-dom';
import groupBy from '../../utils/groupBy';
import { simulateRoutes } from '../../routes';

export default function HomePage() {
    return (
        <div className="py-5">
            {/* BANNER */}
            <section className="px-p-body">
                <div className="from-primary-400 to-primary-700 flex h-80 flex-col items-center justify-center space-y-3 rounded-xl bg-gradient-to-br">
                    <div className="space-y-1">
                        <h1 className="max-w-2xl text-center text-4xl font-bold text-white">
                            Mô phỏng thí nghiệm Vật lý THPT
                        </h1>
                        <p className="text-center text-xl text-white/80">
                            Trực quan, sinh động, dễ tiếp cận!
                        </p>
                    </div>

                    <Link to="about" className="btn bg-white/20">
                        Giới thiệu
                    </Link>
                </div>
            </section>

            <section className="space-y-8 p-p-body">
                <div>
                    <h2 className="text-3xl font-bold">Vật lý 10</h2>
                    <div className="mt-5 grid grid-cols-4 gap-5">
                        {groupBy(simulateRoutes, 'grade')[10].map((simulate, index) => (
                            <Link key={index} to={simulate.path} className="group">
                                <img className="aspect-video w-full rounded-lg bg-gradient-to-br from-orange-300 to-red-600 object-cover" />
                                <h3 className="group-hover:text-primary-600 mt-2 text-xl font-bold">
                                    {simulate.title}
                                </h3>
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold">Vật lý 11</h2>
                    <div className="mt-5 grid grid-cols-4 gap-5">
                        {groupBy(simulateRoutes, 'grade')[11].map((simulate, index) => (
                            <Link key={index} to={simulate.path} className="group">
                                <img className="aspect-video w-full rounded-lg bg-gradient-to-br from-orange-300 to-red-600 object-cover" />
                                <h3 className="group-hover:text-primary-600 mt-2 text-xl font-bold">
                                    {simulate.title}
                                </h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
