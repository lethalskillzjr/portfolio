"use client";

import dynamic from "next/dynamic";
import React from "react";
import { gridItems } from "@/data";

// Dynamically import only the named BentoGrid component
const BentoGrid = dynamic(
  () => import("./ui/BentoGrid").then((mod) => mod.BentoGrid),
  { ssr: false }
);

// Dynamically import BentoGridItem too
const BentoGridItem = dynamic(
  () => import("./ui/BentoGrid").then((mod) => mod.BentoGridItem),
  { ssr: false }
);

function Grid() {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              key={id}
              id={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
}

export default Grid;
