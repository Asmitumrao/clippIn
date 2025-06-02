import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
import icon4 from "../../assets/icon4.png"

export default function Cards() {

    const cardData= [
        {
            content: "Fresh, hygienic, and delicious meals prepared daily to keep you energized and healthy.",
            heading: "Quality Food",
            image: icon1
        },
        {
            content: "Skip the line! Place your order quickly and easily through Clipin anytime, anywhere.",
            heading: "Fast Ordering",
            image: icon2
        },
        {
            content: "Pay online, use your wallet, or opt for cash — simple, safe, fast, and flexible.",
            heading: "Secure Payments",
            image: icon3
        },
        {
            content: "Get a QR code for quick and hassle-free pickup when your order is ready.",
            heading: "Smart Pickup",
            image: icon4
        }
    ];

    return (
        <div className="flex flex-wrap justify-evenly gap-10 mx-20 my-8">

            {cardData.map((item, index) => (
                card({content: item.content, heading: item.heading, image: item.image}, index)
            ))}
          
        </div>
    );

    function card({content,heading,image}) {
        return <div className="flex flex-col  hover:shadow-xl/30 items-center text-center p-6 rounded-lg shadow-sm max-w-xs">
            <img className="w-20 m-5" src={image} />
            <h2 className="text-xl font-bold mb-2">{heading}</h2>
            <p className="text-gray-600 mb-4">
                {content}
            </p>
            <button className="font-medium text-gray-800 hover:underline">Learn More</button>
        </div>;
    }
}