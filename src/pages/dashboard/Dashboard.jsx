import React, { useState, useEffect } from 'react';
import image1 from "../../assets/images/frn1.jpg";
import image2 from "../../assets/images/frn2.jpg";
import image3 from "../../assets/images/frn3.jpg";
import image4 from "../../assets/images/frn4.jpg";
import image5 from "../../assets/images/frn5.jpg";
import image6 from "../../assets/images/frn1.jpg";
import image7 from "../../assets/images/frn2.jpg";
import image8 from "../../assets/images/frn3.jpg";
import image9 from "../../assets/images/frn4.jpg";
import { Clipboard, ClipboardCheck, ClipboardPenLine, Plus } from 'lucide-react';
import { MdPeopleAlt } from 'react-icons/md';
import tdimg1 from "../../assets/images/tdimg1.jpg"
import tdimg2 from "../../assets/images/tdimg2.jpg"
import tdimg3 from "../../assets/images/tdimg3.jpg"
import tdimg4 from "../../assets/images/tdimg4.jpg"
import InviteModal from './components/InviteModal';

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [taskStatus, setTaskStatus] = useState({ completed: 0, inProgress: 0, notStarted: 0 });
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  const friends = [
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
    { id: 5, src: image5 },
    { id: 6, src: image6 },
    { id: 7, src: image7 },
    { id: 8, src: image8 },
    { id: 9, src: image9 },
  ];

  const itemsPerPage = 5;
  const totalPages = Math.ceil(friends.length / itemsPerPage);

  const paginatedFriends = friends.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  // Example data-fetching simulation
  useEffect(() => {
    // Fetch To-Do List
    setTodoList([
      {
        id: 1,
        title: "Attend Nischal's Birthday Party",
        description: "Buy gifts on the way and pick up cake from the bakery.",
        status: "Not Started",
        priority: "Moderate",
        date: "20/06/2023",
        image: tdimg1,
      },
      {
        id: 2,
        title: "Landing Page Design for TravelDays",
        description: "Get the work done by EOD and discuss with client before leaving.",
        status: "In Progress",
        priority: "Moderate",
        date: "20/06/2023",
        image: tdimg2,
      },
    ]);

    // Fetch Completed Tasks
    setCompletedTasks([
      {
        id: 1,
        title: "Walk the Dog",
        description: "Take the dog to the park and bring treats as well.",
        status: "Completed",
        date: "2 days ago",
        image: tdimg3,
      },
      {
        id: 2,
        title: "Conduct Meeting",
        description: "Meet with the client and finalize requirements.",
        status: "Completed",
        date: "2 days ago",
        image: tdimg4,
      },
    ]);

    // Fetch Task Status
    setTaskStatus({ completed: 84, inProgress: 46, notStarted: 13 });
  }, []);



  return (
    <div>
      {/* Welcome message */}
      <div className="flex font-bold text-3xl space-x-3">
        <h1>Welcome back Guest</h1>
        <span>{'\uD83D\uDC4B'}</span>
      </div>

      {/* Friends list */}
      <div className="mt-2 flex justify-end space-x-2 items-center">
        {paginatedFriends.map((friend, index) => (
          <div key={friend.id} className="relative flex items-center">
            {index === paginatedFriends.length - 1 && currentPage < totalPages - 1 ? (
              <div
                className="relative rounded-full shadow-lg w-12 h-12 flex items-center justify-center bg-gray-200 cursor-pointer"
                onClick={handleNextPage}
              >
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-700">
                  +{friends.length - itemsPerPage * (currentPage + 1)}
                </span>
              </div>
            ) : (
              <img
                src={friend.src}
                alt={`Friend ${friend.id}`}
                className="rounded-full shadow-lg w-12 h-12 object-cover"
              />
            )}
          </div>
        ))}
        <div>
          <button  onClick={() => setIsInviteModalOpen(true)}className="flex items-center px-4 py-2 border-2 border-[#631D9B] text-[#631D9B] rounded-xl font-medium hover:bg-[#631D9B] hover:text-white transition duration-300 ease-in-out shadow-md">
            <span className="text-lg mr-2">+</span>
            <MdPeopleAlt className="text-xl mr-2" />
            <span>Invite</span>
          </button>
        </div>

      </div>


      <div className="min-h-screen border-2 border-gray-400 rounded-lg p-6 mt-9">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-100 bg-opacity-60 rounded-lg shadow-xl p-4">
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <span>
                    <Clipboard className='text-gray-500' />
                  </span>
                  <h2 className="text-lg font-bold text-[#631D9B]">To-Do</h2>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <Plus className='text-[#631D9B]' />
                  </span>
                  <h1 className='text-gray-500'>Add Task</h1>
                </div>
              </div>
              <div className='flex items-start gap-4 mt-3'>
                <h1>12 December</h1>
                <span className='text-gray-500'>• Today</span>
              </div>
              <div className="space-y-4 mt-4">
                {todoList.map((todo) => (
                  <div
                    key={todo.id}
                    className="p-4 border rounded-lg flex items-start justify-between space-x-4"
                  >

                    <div className="flex flex-col w-full">
                      <div className="flex items-start">
                        <span
                          className={`w-3 h-3 rounded-full border-2 mr-2 ${todo.status === "Not Started" ? "border-red-500" : todo.status === "In Progress" ? "border-blue-500" : "border-green-500"} bg-white`}
                        ></span>

                        <div className="flex-1">
                          <h3 className="text-md font-bold text-gray-900">{todo.title}</h3>
                          <p className="text-sm text-gray-600 mt-4">{todo.description}</p>
                        </div>
                      </div>


                      <div className="flex items-center text-xsm text-gray-500 mt-4 space-x-4">
                        <span>Priority: {todo.priority}</span>
                        <span>
                          Status:{" "}
                          <span
                            className={`${todo.status === "Not Started" ? "text-red-500" : "text-blue-500"}`}
                          >
                            {todo.status}
                          </span>
                        </span>
                        <span>Created on: {todo.date}</span>
                      </div>
                    </div>
                    <img
                      src={todo.image}
                      alt={todo.title}
                      className="w-[10vw] h-[10-vh] rounded-lg object-cover flex-shrink-0"
                    />
                  </div>
                ))}

              </div>




            </div>

            {/* Right Section: Task Status and Completed Tasks */}
            <div>
              {/* Task Status */}
              <div className="bg-gray-100 bg-opacity-60 rounded-xl shadow p-4 mb-6">
                <div className='flex items-center gap-3'>
                  <span>
                    <ClipboardPenLine className='text-gray-500' />
                  </span>
                  <h2 className="text-lg font-bold text-[#631D9B]">Task Status</h2>
                </div>
                <div className="flex justify-around mt-4">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full border-8 border-green-500 flex items-center justify-center">
                      <span className="text-green-500 font-bold text-lg">
                        {taskStatus.completed}%
                      </span>
                    </div>
                    <span className="flex items-center mt-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-2"></span>
                      <p className="text-sm text-gray-600">Completed</p>
                    </span>

                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full border-8 border-blue-500 flex items-center justify-center">
                      <span className="text-blue-500 font-bold text-lg">
                        {taskStatus.inProgress}%
                      </span>
                    </div>
                    <span className="flex items-center mt-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-2"></span>
                      <p className="text-sm text-gray-600 ">In Progress</p>
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full border-8 border-red-500 flex items-center justify-center">
                      <span className="text-red-500 font-bold text-lg">
                        {taskStatus.notStarted}%
                      </span>
                    </div>
                    <span className="flex items-center mt-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 mr-2"></span>
                      <p className="text-sm text-gray-600">Not Started</p>
                    </span>
                  </div>
                </div>
              </div>

              {/* Completed Tasks */}
              <div className="bg-gray-100 bg-opacity-60 rounded-lg shadow-xl p-4">
                <div className='flex items-center gap-3'>
                  <span>
                    <ClipboardCheck className='text-gray-500' />
                  </span>
                  <h2 className="text-lg font-bold text-[#631D9B]">Completed Task</h2>
                </div>
                <div className="space-y-4 mt-4">
                  {completedTasks.map((task) => (
                    <div
                      key={task.id}
                      className="p-4 border rounded-lg flex items-start justify-between"
                    >
                      <div className="flex items-start">
                        <span className="w-3 h-3 rounded-full border-2 mr-2 bg-white border-green-500"></span>
                        <div>
                          <h3 className="text-md font-semibold text-gray-900">
                            {task.title}
                          </h3>
                          <p className="text-sm text-gray-600">{task.description}</p>
                          <p className="text-sm text-green-500">
                            Status: {task.status}
                          </p>
                          <p className="text-sm text-gray-400">{task.date}</p>
                        </div>
                      </div>
                      <img
                        src={task.image}
                        alt={task.title}
                        className="w-[10vw] h-[10-vh] rounded-lg object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* Invite Members Modal */}
       <InviteModal
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
      />

    </div>
  );
};

export default Dashboard;
