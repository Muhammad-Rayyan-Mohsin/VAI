"use client";

import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-3 sm:gap-4 md:auto-rows-[18rem] md:grid-cols-3 px-4 sm:px-0",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-3 sm:space-y-4 rounded-xl border border-neutral-200 bg-white p-3 sm:p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none min-h-[12rem] sm:min-h-[14rem]",
        className,
      )}
    >
      <div className="flex-1">
        {header}
      </div>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="mb-2 flex items-center">
          <div className="scale-90 sm:scale-100">
            {icon}
          </div>
        </div>
        <h3 className="mt-2 mb-2 font-sans font-bold text-sm sm:text-base text-neutral-600 dark:text-neutral-200 leading-tight">
          {title}
        </h3>
        <p className="font-sans text-xs sm:text-sm font-normal text-neutral-600 dark:text-neutral-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}; 