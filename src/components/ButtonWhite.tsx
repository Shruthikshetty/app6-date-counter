export default function ButtonWhite({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <button
      className="text-neutral-400 px-4 py-2 rounded text-xl font-bold transition hover:text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
