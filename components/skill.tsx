import React, { useEffect, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import VanillaTilt from "vanilla-tilt";
import styles from './skillsbox.module.scss'

interface SkillProps {
  icon: React.FC<{ size: number }>;
  index: number;
  label: string;
  moveCard: (fromIndex: number, toIndex: number) => void;
}

interface DraggedItem {
  index: number;
}

const Skill: React.FC<SkillProps> = ({ icon, index, label, moveCard }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const [, drag] = useDrag({
    type: "CARD",
    item: { type: "CARD", index } as DraggedItem,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "CARD",
    hover: (draggedItem: DraggedItem) => {
      if (draggedItem.index !== index) {
        moveCard(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  useEffect(() => {
    if (typeof window !== "undefined" && ref.current) {
      VanillaTilt.init(ref.current, {
        max: 20,
        speed: 400,
      });
    }
  }, [ref]);

  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`card ${styles.card}`}
      style={{
        transform: `translate(${isDragging ? 0 : 0}px, ${
          isDragging ? 0 : 0
        }px)`,
      }}
      data-tilt
      data-tilt-reverse="true"
      data-tilt-glare
      data-tilt-max-glare="0.8"
      data-tilt-scale="1.15"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
    >
      {icon({ size: 48 })}
      <p>{label}</p>
    </div>
  );
};

export default Skill;
