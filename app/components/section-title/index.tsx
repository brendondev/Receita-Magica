import { cn } from "@/app/lib/utils";

type SectionTitleProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export const SectionTitle = ({
  title,
  subtitle,
  className,
}: SectionTitleProps) => {
  return (
    <div className={cn(`'flex flex-col gap-4'`, className)}>
      <span className="font-flower text-sm text-red-400">{`${subtitle}`}</span>
      <h3 className="text-3xl font-medium">{title}</h3>
    </div>
  );
};
