import Image from "next/image";

export default function Dashboard() {
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-[#ebe6e6]">
            <div className="relative w-[90%] h-[90%] rounded-2xl overflow-hidden shadow-lg">
                <Image 
                    src="/images/payimage.jpg" 
                    alt="Dashboard" 
                    fill 
                    className="object-cover"
                />
            </div>
        </div>
    );
}
