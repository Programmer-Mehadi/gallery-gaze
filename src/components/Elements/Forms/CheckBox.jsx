/* eslint-disable react/prop-types */
export default function CheckBox({ ...props }) {
  return (
    <input
      className="text-lg w-[24px] h-[24px]"
      type="checkbox"
      name={props.name ? props.name : "checkbox"}
    />
  );
}
