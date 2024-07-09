"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Adjust the import path based on your project structure
import { List, Grid, Plus } from "lucide-react";
import ChapterCard from "@/components/ChapterCard";
import { Badge } from "@/components/ui/badge";

const subjects = [
  { id: 1, name: "SQL", tags: ["SQL", "NoSQL", "Indexing"] },
  { id: 2, name: "ER Diagram", tags: ["Agile", "Scrum", "TDD"] },
  { id: 3, name: "R-DBMS", tags: ["TCP/IP", "Routing", "DNS"] },
  { id: 4, name: "Normalization", tags: ["ML", "DL", "NLP"] },
  {
    id: 5,
    name: "Algebra",
    tags: ["Supervised", "Unsupervised", "Reinforcement"],
  },
];

export default function SubjectDetails({
  subjectId,
  name = "Database Management",
}) {
  const [isGridView, setIsGridView] = useState(true);

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">{name}</h1>
          {["SQL", "NoSQL", "Indexing"].map((tag, index) => (
            <Badge key={index} className="mb-2 mr-2">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex space-x-2">
          <Button onClick={() => {}}>
            <Plus />
            Add Chapter
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
          <ChapterCard
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
