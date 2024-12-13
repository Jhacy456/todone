import React from 'react';
import image1 from "../../../assets/images/frn1.jpg";
import image2 from "../../../assets/images/frn2.jpg";
import image3 from "../../../assets/images/frn3.jpg";
import image4 from "../../../assets/images/frn4.jpg";
import { ChevronDown } from 'lucide-react';

const InviteModal = ({ isOpen, onClose }) => {
    const [openDropdownId, setOpenDropdownId] = React.useState(null);

    const toggleDropdown = (id) => {
        setOpenDropdownId((prevId) => (prevId === id ? null : id));
    };

    const handleAction = (id, action) => {
        console.log(`Action: ${action} for Friend ID: ${id}`);
        // Update the friend's role or perform other actions
        setOpenDropdownId(null); // Close the dropdown after selection
    };


    const friends = [
        { id: 1, src: image1, name: "Cassy Blinks", email: "cassyb345@gmail.com" },
        { id: 2, src: image2, name: "Cassy Blinks", email: "cassyb345@gmail.com" },
        { id: 3, src: image3, name: "Cassy Blinks", email: "cassyb345@gmail.com" },
        { id: 4, src: image4, name: "Cassy Blinks", email: "cassyb345@gmail.com" },
    ];

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-100 rounded-lg w-full max-w-3xl px-10">
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-lg font-semibold">
                        <span className="underline decoration-[#631D9B] decoration-4 mr-1">Send an invite</span>
                        to a new member
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <h1 className="underline font-bold">Go Back</h1>
                    </button>
                </div>
                <div className="border-2 border-gray-400 mb-5">
                    <div className="px-4">
                        <h1 className="font-bold mt-5">Email</h1>
                        <input
                            type="text"
                            placeholder="jakpesad20@gmail.com"
                            className="rounded w-[35vw] py-2 px-3 border border-gray-300 focus:border-transparent"
                        />
                        <button
                            type="submit"
                            className="w-[10vw] bg-[#631D9B] ml-4 text-white font-semibold py-2 px-4 rounded transition duration-300"
                        >
                            Send Invite
                        </button>
                        <div>
                            <h1 className="mt-8 font-bold">Members</h1>
                        </div>
                        <div className="gap-4 p-4 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
                            {friends.map((friend) => (
                                <div
                                    key={friend.id}
                                    className="relative flex items-center justify-between space-x-4  pb-2"
                                >
                                    {/* Profile Section */}
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={friend.src}
                                            alt={friend.name}
                                            className="w-12 h-12 rounded-full shadow-lg object-cover"
                                        />
                                        <div>
                                            <p className="text-sm font-medium text-gray-800">{friend.name}</p>
                                            <p className="text-xs text-gray-600">{friend.email}</p>
                                        </div>
                                    </div>

                                    {/* Role and Dropdown */}
                                    <div className="flex items-center space-x-2">
                                        <p className="text-sm font-medium text-gray-800">
                                            {friend.role || "Can edit"} {/* Default to "Can edit" */}
                                        </p>
                                        <div className="relative">
                                            <button
                                                className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                                onClick={() => toggleDropdown(friend.id)}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={`h-5 w-5 transform ${openDropdownId === friend.id ? "rotate-180" : "rotate-0"
                                                        } transition-transform`}
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                            {openDropdownId === friend.id && (
                                                <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg">
                                                    <ul className="py-1 text-sm text-gray-700">
                                                        <li>
                                                            <button
                                                                className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                                                                onClick={() => handleAction(friend.id, "Can edit")}
                                                            >
                                                                Can edit
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button
                                                                className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                                                                onClick={() => handleAction(friend.id, "Owner")}
                                                            >
                                                                Owner
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button
                                                                className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                                                                onClick={() => handleAction(friend.id, "View")}
                                                            >
                                                                View
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>




                    </div>
                    <div className='px-4 mb-5 mt-6'>
                        <h1 className='font-bold'>Project Link</h1>
                        <input
                            type="text"
                            placeholder="https://sharelinkhereandthere.com/12345ac22"
                            className="rounded w-[35vw] py-2 border px-3 border-gray-300 focus:border-transparent"
                        />
                        <button
                            type="submit"
                            className="w-[10vw] bg-[#631D9B] ml-4 text-white font-semibold py-2 px-4 rounded transition duration-300"
                        >
                            Copy Link
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InviteModal;
