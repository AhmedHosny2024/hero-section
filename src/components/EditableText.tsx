import React, { useState, useRef, useEffect } from 'react';

interface EditableTextProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  multiline?: boolean;
}

const EditableText: React.FC<EditableTextProps> = ({ 
  value, 
  onChange, 
  className = '', 
  multiline = false 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableValue, setEditableValue] = useState(value);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      // Set the cursor to the end of the input value
      if ('setSelectionRange' in inputRef.current) {
        const length = inputRef.current.value.length;
        inputRef.current.setSelectionRange(length, length);
      }
    }
  }, [isEditing]);

  useEffect(() => {
    setEditableValue(value);
  }, [value]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditableValue(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onChange(editableValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      setIsEditing(false);
      onChange(editableValue);
    }
    if (e.key === 'Escape') {
      setIsEditing(false);
      setEditableValue(value);
    }
  };

  if (isEditing) {
    if (multiline) {
      return (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          value={editableValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className={`w-full p-1 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
          rows={3}
        />
      );
    }
    
    return (
      <input
        ref={inputRef as React.RefObject<HTMLInputElement>}
        type="text"
        value={editableValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={`w-full p-1 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    );
  }

  const displayElement = multiline ? (
    <p 
      className={`${className} cursor-text transition-colors duration-200 hover:bg-blue-50 hover:bg-opacity-30 rounded px-1`}
      onDoubleClick={handleDoubleClick}
    >
      {value}
    </p>
  ) : (
    <span 
      className={`${className} cursor-text transition-colors duration-200 hover:bg-blue-50 hover:bg-opacity-30 rounded px-1`}
      onDoubleClick={handleDoubleClick}
    >
      {value}
    </span>
  );

  return (
    <div className="relative group">
      {displayElement}
      <div className="hidden group-hover:block absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-80">
        Double-click to edit
      </div>
    </div>
  );
};

export default EditableText;