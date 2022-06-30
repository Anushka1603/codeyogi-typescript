import { FC } from "react";

const Button: FC = (props: any) => {
  return (
    <>
      <button
        type={props.type}
        onClick={props.onClick}
        className="p-2  text-white border bg-indigo-600 rounded-md text-xl font-bold "
      >
        {props.input}
      </button>
    </>
  );
};
export default Button;
