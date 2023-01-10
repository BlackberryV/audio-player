import React, { FC, useRef } from "react";

interface FileUploaderProps {
  setFile: (file: File) => void;
  accept: string;
  children?: React.ReactNode;
}

export const FileUploader: FC<FileUploaderProps> = ({
  accept,
  setFile,
  children,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files && setFile(e.target.files[0]);
  };

  return (
    <div onClick={() => ref.current?.click()}>
      <input
        type="file"
        accept={accept}
        style={{ display: "none" }}
        ref={ref}
        onChange={onChange}
      />
      {children}
    </div>
  );
};
