type Props = {
  children: React.ReactNode;
  disabled?: boolean;
};

export default function Button({ children, disabled }: Props) {
  return (
    <button
      disabled={disabled}
      className={`w-full py-4 rounded-full font-medium
        ${disabled ? "bg-gray-300" : "bg-primary text-white"}
      `}
    >
      {children}
    </button>
  );
}