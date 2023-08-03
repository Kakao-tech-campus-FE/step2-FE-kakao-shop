interface LabelProps {
  children: React.ReactNode;
  htmlFor: string;
  description: string; // Label description will be placed above children
}

export default function Label({
  children,
  htmlFor,
  description,
}: LabelProps) {
  return (
    <label htmlFor={htmlFor}>
      <div className="px-2 text-sm">
        {description}
      </div>
      {children}
    </label>
  );
}
