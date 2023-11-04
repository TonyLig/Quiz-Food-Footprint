interface Props {
  children: React.ReactNode;
}

function MainButton({ children }: Props) {
  return (
    <button className="bg-mainGreen px-4 py-2 rounded-full font-semibold min-w-[120px]">
      {children}
    </button>
  );
}

export default MainButton;
