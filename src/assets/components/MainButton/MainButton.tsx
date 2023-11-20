interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function MainButton({ children, onClick }: Props) {
  return (
    <button
      className="bg-mainGreen hover:bg-hoverGreen  px-4 py-2 rounded-full font-semibold min-w-[130px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
