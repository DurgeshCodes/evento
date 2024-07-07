// SubjectCard.js
import { Book } from "lucide-react";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function SubjectCard({ name = "Database Management", id, tags = [] }) {
  return (
    <Card className="m-4 transition-transform duration-300 transform cursor-pointer hover:scale-105">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Book size={32} className="mr-4" />
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap mt-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="mb-2 mr-2">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default SubjectCard;
