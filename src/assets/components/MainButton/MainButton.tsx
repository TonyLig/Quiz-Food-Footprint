interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function MainButton({ children, onClick }: Props) {
  return (
    <button
      className="bg-mainGreen hover:bg-hoverGreen  px-4 py-2 rounded-full font-semibold min-w-[120px] focus:outline-none focus:ring focus:ring-violet-500 "
      onClick={onClick}
    >
      {children}
    </button>
  );
}
