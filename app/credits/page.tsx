import React from "react";

const Credits = () => {
  const teamMembers = [
    {
      name: "Winbert Zhang",
      role: "Lead Developer",
      contributions: "Created website ",
    },
    {
      name: "Megan Fu",
      role: "UI/UX Designer",
      contributions:
        "Designed the carousel which is utilized in the homepage",
    },
    {
      name: "Andrew Chang",
      role: "Backend Developer",
      contributions: "Built and maintained the server-side components.",
    },
    {
      name: "Diana Prince",
      role: "Content Writer",
      contributions: "Created and edited website content.",
    },
    {
      name: "Ethan Hunt",
      role: "Project Manager",
      contributions: "Managed timelines and coordinated the team.",
    },
  ];

  return (
    <div className="flex flex-col text-center p-4">
      <h1 className="text-2xl font-bold mb-4">Credits</h1>
      <p className="mb-6 px-48">
        Our website is maintained and created by our amazing Website Development
        Team. 
        <br></br> We would like to take this opportunity to recognize our team, past and present, and
        thank them for helping us tremondously on this website. 
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="p-4 border rounded shadow-md">
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <h3 className="text-lg italic">{member.role}</h3>
            <p>{member.contributions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Credits;
