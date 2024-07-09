"use client";

import React, { useState } from "react";
import SubjectCard from "@/components/SubjectCard";
import { Button } from "@/components/ui/button"; // Adjust the import path based on your project structure
import { List, Grid, Plus } from "lucide-react";

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
  const [isGridView, setIsGridView] = useState(true);

  return (
    <div className="p-4">
      <div className="flex justify-end mb-4">
        <div className="flex space-x-2">
          <Button onClick={() => {}}>
            <Plus />
            Add Subject
          </Button>
          <Button
            variant="secondary"
            onClick={() => setIsGridView(true)}
            disabled={isGridView}
          >
            <Grid size={20} />
          </Button>
          <Button
            variant="secondary"
            onClick={() => setIsGridView(false)}
            disabled={!isGridView}
          >
            <List size={20} />
          </Button>
        </div>
      </div>
      <div
        className={
          isGridView
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            : "space-y-4"
        }
      >
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.id}
            id={subject.id}
            name={subject.name}
            tags={subject.tags}
          />
        ))}
      </div>
    </div>
  );
}
