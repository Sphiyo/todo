export default function Header() {
  const checkedToDosCount = "do me";
  const toDosCount = "do me";
  return (
    <div className="d-flex p-2 border rounded-top-2 justify-content bg-dark text-light">
      <div className="w-75"> O O O </div>
      <div className="w-25">
        {checkedToDosCount} / {toDosCount}
      </div>
    </div>
  );
}
