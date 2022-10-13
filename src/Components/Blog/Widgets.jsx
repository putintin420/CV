import React from "react";
import PostWidget from "./PostWidget";
import CategoriesWidget from "./CategoriesWidget";
import { useParams } from "react-router-dom";
import TableOfContent from "./TableOfContent";

const Widgets = ({ tableOfContents }) => {
  return (
    <div className="relaive bg- top-8 col-span-1 flex  px-4 md:justify-start lg:sticky lg:col-span-4 ">
      <div className=" max-w-[350px] lg:max-w-[450px]">
        <TableOfContent tableOfContents={tableOfContents} />
        <PostWidget />
        <CategoriesWidget />
      </div>
    </div>
  );
};

export default Widgets;
