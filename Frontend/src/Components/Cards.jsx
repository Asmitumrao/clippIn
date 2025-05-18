import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"
import icon4 from "../assets/icon4.png"
export default function Cards() {
    return (
        <div className="flex flex-wrap justify-between gap-4 mx-20 my-8">

            <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-sm max-w-xs">
                <img className="w-20 m-5" src={icon1} />
                <h2 className="text-xl font-bold mb-2">Quality Food</h2>
                <p className="text-gray-600 mb-4">
                    Fresh, hygienic, and delicious meals prepared daily to keep you energized and healthy.
                </p>
                <button className="font-medium text-gray-800 hover:underline">Learn More</button>
            </div>


            <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-sm max-w-xs">
               <img className="w-20 m-5" src={icon2} />
                <h2 className="text-xl font-bold mb-2">Fast Ordering</h2>
                <p className="text-gray-600 mb-4">
                    Skip the line! Place your order quickly and easily through Clipin anytime, anywhere.
                </p>
                <button className="font-medium text-red-500 hover:underline">Learn More</button>
            </div>


            <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-sm max-w-xs">
                <img className="w-20 m-5" src={icon3} />
                <h2 className="text-xl font-bold mb-2">Secure Payments</h2>
                <p className="text-gray-600 mb-4">
                    Pay online, use your wallet, or opt for cash — simple, safe, fast, and flexible.
                </p>
                <button className="font-medium text-gray-800 hover:underline">Learn More</button>
            </div>


            <div className="flex flex-col items-center text-center p-6  rounded-lg shadow-sm max-w-xs">
                <img className="w-20 m-5" src={icon4} />
                <h2 className="text-xl font-bold mb-2">Smart Pickup</h2>
                <p className="text-gray-600 mb-4">
                    Get a QR code for quick and hassle-free pickup when your order is ready.
                </p>
                <button className="font-medium text-gray-800 hover:underline">Learn More</button>
            </div>
        </div>
    );
}