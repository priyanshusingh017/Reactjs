import React from 'react';

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="https://images.unsplash.com/photo-1560674457-12073ed6fae6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Developer working on React"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React Development by Passionate Developers
            </h2>
            <p className="mt-6 text-gray-600">
              We specialize in creating modern, efficient React applications that deliver
              exceptional user experiences. Our team combines technical expertise with
              creative problem-solving to build solutions that matter.
            </p>
            <p className="mt-4 text-gray-600">
              With a focus on clean code and best practices, we ensure our applications
              are maintainable, scalable, and performant. We stay updated with the latest
              React features and ecosystem tools to provide cutting-edge solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}