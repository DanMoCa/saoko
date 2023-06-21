import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="San Saoko de los bounties" />

            <div className="flex md:mb-32 xl:h-40 flex-1 justify-center">
                <audio controls loop>
                    <source src="/dorime.mp3" type="audio/mpeg"/>
                </audio>
            </div>
            <div className={"flex items-center min-h-screen flex-1 justify-center"}>
                <img src="/san_saoko.png" alt="" className={"rounded-md animate-spin"}/>
            </div>
            <style>
                {
                    `.animate-spin {
                        animation: spin 60s linear infinite
                    }
                `}
            </style>
        </>
    );
}
