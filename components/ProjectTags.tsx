// components/ProjectTags.tsx
import { TagBadge } from "./TagBadge";

export const ProjectTags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-2 justify-evenly tech-item">
    {tags.map((tag) => (
      <TagBadge key={tag} tag={tag} />
    ))}
  </div>
);