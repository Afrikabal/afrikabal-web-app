import { useState } from 'react';

const faqs = [
    {
        question: "How do I buy airtime on the Kuda app?",
        answer: (
            <>
                <p>To buy meter units on your Afrikabal app, follow these steps:</p>
                <ol className="list-decimal pl-6">
                    <li>Sign in to your Kuda app, then tap Pay.</li>
                    <li>Tap Pay A Bill.</li>
                    <li>Tap Electricity.</li>
                    <li>Choose your electricity service provider (distribution company).</li>
                    <li>Choose the prepaid package.</li>
                    <li>
                        Type in your prepaid meter number and the amount of meter units you want to buy.
                    </li>
                    <li>
                        Complete your payment with your transaction PIN, fingerprint, or Face ID.
                    </li>
                </ol>
                <p className="mt-2">
                    We&apos;ll send your meter token to the email address linked to your Kuda account.
                </p>
            </>
        ),
    },
    {
        question: "How do I buy internet data on the Kuda app?",
        answer: (
            <>
                <p>To buy meter units on your Afrikabal app, follow these steps:</p>
                <ol className="list-decimal pl-6">
                    <li>Sign in to your Kuda app, then tap Pay.</li>
                    <li>Tap Pay A Bill.</li>
                    <li>Tap Electricity.</li>
                    <li>Choose your electricity service provider (distribution company).</li>
                    <li>Choose the prepaid package.</li>
                    <li>
                        Type in your prepaid meter number and the amount of meter units you want to buy.
                    </li>
                    <li>
                        Complete your payment with your transaction PIN, fingerprint, or Face ID.
                    </li>
                </ol>
                <p className="mt-2">
                    We&apos;ll send your meter token to the email address linked to your Kuda account.
                </p>
            </>
        ),
    },
    {
        question: "Can I recharge a Nigerian phone number with the Kuda app when I’m abroad?",
        answer: (
            <>
                <p>To buy meter units on your Kuda app, follow these steps:</p>
                <ul className="list-decimal pl-6">
                    <li>AEDC - Abuja Electricity Distribution Company</li>
                    <li>BEDC - Benin Electricity Distribution Company</li>
                    <li>EEDC - Enugu Electricity Distribution Company</li>
                    <li>EKEDC - Eko Electricity Distribution Company</li>
                    <li>IBEDC - Ibadan Electricity Distribution Company</li>
                    <li>
                        IKEDC - Ikeja Electricity Distribution Company
                    </li>
                    <li>
                        JEDC - Jos Electricity Distribution Company
                    </li>
                    <li>KAEDCO - Kaduna Electricity Distribution Company</li>
                    <li>KEDCO - Kano Electricity Distribution Company</li>
                    <li>PHED - Port Harcourt Electricity Distribution Company</li>
                </ul>

            </>
        ),
    },
    {
        question: "Which mobile networks can I buy airtime and data from on the Kuda app?",
        answer: (
            <>
                <p>To load your meter token, follow these steps:</p>
                <ol className="list-decimal pl-6">
                    <li>Check your email for your meter token.</li>
                    <li>On your meter, type in the code on your token, then press the Enter button.</li>

                </ol>
                <p className="mt-2">
                    Your meter should be recharged immediately.
                </p>
            </>
        ),
    },
    {
        question: "When can I use the airtime or data that I buy on the Kuda app?",
        answer: (
            <>
                <p>To buy meter units on your Afrikabal app, follow these steps:</p>
                <ol className="list-decimal pl-6">
                    <li>Sign in to your Kuda app, then tap Pay.</li>
                    <li>Tap Pay A Bill.</li>
                    <li>Tap Electricity.</li>
                    <li>Choose your electricity service provider (distribution company).</li>
                    <li>Choose the prepaid package.</li>
                    <li>
                        Type in your prepaid meter number and the amount of meter units you want to buy.
                    </li>
                    <li>
                        Complete your payment with your transaction PIN, fingerprint, or Face ID.
                    </li>
                </ol>
                <p className="mt-2">
                    We&apos;ll send your meter token to the email address linked to your Afrikabal account.
                </p>
            </>
        ),
    },
   
        

];

function Faq() {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    return (
        <div className="w-full max-w-2xl mx-auto py-10">
            <h2 className="text-3xl font-bold text-center mb-6 text-lime-600">Airtime & Internet Data FAQs</h2>
            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <div key={i} className="bg-white rounded-lg p-4">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggle(i)}
                        >
                            <p className=" text-lime-600">{faq.question}</p>
                            <span className='text-neutral-400'>{selected === i ? "▼" : "▶"}</span>
                        </div>
                        {selected === i && (
                            <div className="mt-3 text-gray-700">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
