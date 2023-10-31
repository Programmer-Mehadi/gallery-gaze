import CheckBox from "../Elements/Forms/CheckBox";

export default function Header({ selectedImages }) {
  return (
    <div className="bg-white rounded-t-[4px]  px-8 py-5 border-b border-[#ebebed] flex justify-between flex-wrap gap-6">
      {selectedImages.length > 0 ? (
        <div className="flex gap-2 items-center">
          <CheckBox name="all_select" />
          <span className="font-medium">3 Files Selected</span>
        </div>
      ) : (
        <div className="flex gap-2 items-center">
          <span className="text-lg font-bold">Gallery</span>
        </div>
      )}

      <div>
        <span className="text-[#ff2600] font-medium cursor-pointer">
          Delete Files
        </span>
      </div>
    </div>
  );
}
