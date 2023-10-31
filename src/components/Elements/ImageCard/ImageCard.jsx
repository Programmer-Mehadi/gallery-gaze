import CheckBox from "../Forms/CheckBox";

export default function ImageCard({ image, index }) {
  return (
    <div className="image_card rounded-[4px] overflow-hidden relative top-0 left-0">
      <img src={image?.path} className="image w-full h-full" alt="" />
      <div className="hover_overlay bg-[#828282] bg-opacity-50 w-full h-full absolute top-0 left-0 z-20 p-6">
        <CheckBox />
      </div>
    </div>
  );
}
