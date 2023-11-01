/* eslint-disable react/prop-types */
export default function CheckBox({ ...props }) {
  return (
    <input
      className={"cursor-pointer text-lg w-[24px] h-[24px] " + props.className}
      type="checkbox"
      defaultChecked={props.checked ? true : false}
      name={props.name ? props.name : "checkbox"}
      onChange={props.onChange}
    />
  );
}
