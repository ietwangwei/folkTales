import { Input, InputProps } from "@nextui-org/react";

export default function Search(props: InputProps) {
  return (
    <div className="search">
      <Input
        radius={props.radius}
        type={props.type}
        label={props.label}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        className={props.className}
        startContent={props.startContent}
        isClearable={props.isClearable}
        style={props.style}
        onKeyDown={props.onKeyDown}
        value={props.value}
        onChange={props.onChange}
        onClear={props.onClear}
      />
    </div>
  );
}
