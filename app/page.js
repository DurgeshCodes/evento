"use client";

import SubjectCard from "@/components/SubjectCard";

const subjects = [
  { id: 1, name: "Database Management", tags: ["SQL", "NoSQL", "Indexing"] },
  { id: 2, name: "Software Engineering", tags: ["Agile", "Scrum", "TDD"] },
  { id: 3, name: "Computer Networks", tags: ["TCP/IP", "Routing", "DNS"] },
  { id: 4, name: "Artificial Intelligence", tags: ["ML", "DL", "NLP"] },
  {
    id: 5,
    name: "Machine Learning",
    tags: ["Supervised", "Unsupervised", "Reinforcement"],
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {subjects.map((subject) => (
        <SubjectCard
          key={subject.id}
          id={subject.id}
          name={subject.name}
          tags={subject.tags}
        />
      ))}
    </div>
  );
}
