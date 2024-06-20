import React from 'react';
import Card from './Card';

function Home() {
  return (
    <div className='w-full bg-gray-600 min-h-screen'>
      <div className='flex max-w-3xl gap-4 flex-wrap mx-auto justify-center'>
      <Card title="Web development" content="About web dev" />
        <Card title="App development" content="About App dev"/>
        <Card title="UI/UX Design" content="Design matters"/>
        <Card title="Project Management" content="Manage projects effectively"/>
      </div>
    </div>
  );
}

export default Home;
