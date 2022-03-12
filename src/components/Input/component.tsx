import React, { FC } from "react";
import { Props } from "./props";

export const Input: FC<Props> = ({ onChange, value, label, type, name }) => {
  return (
    <div className="flex flex-col">
      <label className="capitalize" htmlFor={label}>
        {label}
      </label>
      <input
        className="py-1 px-2 rounded-sm focus:outline-primary"
        type={type}
        name={name}
        id={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
