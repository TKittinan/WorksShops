

import UserProfileCard from "./components/UserProfileCard";

const users = [
  {
    id: 1,
    name: "John Doe",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
    email: "john@example.com",
    isOnline: true,
    skills: [
      { name: "React", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "Node.js", level: "Beginner" }
    ]
  },
  {
    id: 2,
    name: "Jane Smith",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
    email: "jane@example.com",
    isOnline: false,
    skills: [
      { name: "HTML", level: "Advanced" },
      { name: "CSS", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate" }
    ]
  },
  {
    id: 3,
    name: "Alice Brown",
    avatarUrl: "https://i.pravatar.cc/150?img=7",
    email: "alice@example.com",
    isOnline: true,
    skills: [
      { name: "Python", level: "Intermediate" },
      { name: "Django", level: "Beginner" }
    ]
  },
  {
    id: 4,
    name: "Alice Brown",
    avatarUrl: "https://i.pravatar.cc/150?img=7",
    email: "alice@example.com",
    isOnline: true,
    skills: [
      { name: "Python", level: "Intermediate" },
      { name: "Django", level: "Beginner" }
    ]
  },
  {
    id: 5,
    name: "Alice Brown",
    avatarUrl: "https://i.pravatar.cc/150?img=7",
    email: "alice@example.com",
    isOnline: true,
    skills: [
      { name: "Python", level: "Intermediate" },
      { name: "Django", level: "Beginner" }
    ]
  }
];

function App() {
  const handleViewDetails = (userId: string | number) => {
    alert(`ดูรายละเอียดผู้ใช้ ID: ${userId}`);
  };

  return (
    <div  style={{

      width: "65%",
      display: "flex",
      flexWrap: "wrap",
      gap: "16px",
      justifyContent: "center",
      padding: "24px",
      margin: "auto"
    }}>
      {users.map((user) => (
        <UserProfileCard
          key={user.id}
          user={user}
          onViewDetails={handleViewDetails}
        />
      ))}
    </div>
  );
  
}

export default App;
