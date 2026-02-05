import React from 'react';
import { FiMessageCircle, FiMail, FiHelpCircle } from 'react-icons/fi';

const ContactStrip = () => {
    const contacts = [
        { icon: <FiMessageCircle />, text: "Talk to Us", sub: "1800-123-4567" },
        { icon: <FiMail />, text: "Write to Us", sub: "help@cravella.com" },
        { icon: <FiHelpCircle />, text: "Help Center", sub: "FAQs & Support" }
    ];

    return (
        <div className="bg-white py-8 border-y border-gray-100 my-10">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-around items-center gap-6">
                {contacts.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-4 group cursor-pointer p-4 rounded-xl hover:bg-gray-50 transition duration-300">
                        <div className="text-3xl text-primary group-hover:scale-110 transition duration-300">
                            {item.icon}
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800">{item.text}</h4>
                            <p className="text-sm text-gray-500">{item.sub}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ContactStrip;
