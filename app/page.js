"use client"
import { Snippet } from 'next/font/google'
import React, { useState } from 'react'

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc, id: Date.now() }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  }

  let renderTask = <h2>No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => (
      <li className='flex items-center justify-between mb-8' key={t.id}>
        <div className='flex justify-between mb-5 w-2/3'>
          <h5 className='text-xl font-semibold'>{t.title}</h5>
          <h6 className='text-lg font-medium'>{t.desc}</h6>
        </div>
        <button 
          onClick={() => deleteHandler(i)}
          className='bg-red-600 text-white px-4 py-2 rounded font-bold'>Delete</button>
      </li>
    ));
  }

  return (
    <> 
      <h1 className='bg-black text-white p-5 font-8xl font-extrabold text-center'>To Do List</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
          placeholder='Enter Title Here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
          placeholder='Enter Description Here'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
      </form>
      <hr/>
      <div className='bg-slate-200 p-8'>
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}

export default Page;
