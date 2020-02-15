import React from "react";
import Input from "./Input";

export default function Header({ valeu, onChange, erro, onKeyPress }) {
  return (
    <div>
      <Input
        value={valeu}
        onChange={onChange}
        erro={erro}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}
