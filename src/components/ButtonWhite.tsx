export default function ButtonWhite({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <button
      className="text-neutral-400  rounded text-2xl font-bold transition hover:text-white "
      onClick={onClick}
    >
      {text}
    </button>
  );
}
