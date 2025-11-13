import React, { useContext } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';


import { FaCheck, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider';

const AcceptedTasks = () => {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();

  // Fetch accepted tasks
  const { data: tasks = [], isLoading } = useQuery({
    queryKey: ['acceptedTasks', user?.email],
    queryFn: async () => {
      const res = await axios.get(`https://job-hunter-server-one.vercel.app/acceptedTasks?userEmail=${user?.email}`);
      return res.data;
    },
  });

  // Mutation to delete task (DONE/CANCEL)
  const deleteTaskMutation = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`https://job-hunter-server-one.vercel.app/acceptedTasks/${id}`);
    },
    onSuccess: (_, id) => {
      queryClient.setQueryData(['acceptedTasks', user?.email], (old) =>
        old.filter((task) => task._id !== id)
      );
    },
  });

  if (isLoading) return <p>Loading tasks...</p>;

  if (tasks.length === 0) return <p className="text-center mt-10">No accepted tasks yet.</p>;

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Accepted Tasks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tasks.map((task) => (
          <div key={task._id} className="p-4 bg-white shadow rounded-lg border flex flex-col gap-2">
            <h2 className="font-semibold text-lg">{task.title}</h2>
            <p>Posted By: {task.postedBy}</p>
            <p>Category: {task.category}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => deleteTaskMutation.mutate(task._id)}
                className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
              >
                DONE <FaCheck />
              </button>
              <button
                onClick={() => deleteTaskMutation.mutate(task._id)}
                className="flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
              >
                CANCEL <FaTimes />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcceptedTasks;
