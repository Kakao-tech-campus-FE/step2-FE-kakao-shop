import Button from "../atoms/Button";

const PageSetButton = ({ page, setPage}) => {
  const pageArray = Array(page).fill(0);
  return (
    <div className="flex">
    {pageArray.map((_, index) => 
      <Button key={index} className="text-xs px-1 mt-0.5 border rounded-full bg-gray-500 font-bold text-white w-10 h-10" onClick={() => setPage(index)}>
        {index + 1}
      </Button>
    )}
    </div>
  )
}
export default PageSetButton;