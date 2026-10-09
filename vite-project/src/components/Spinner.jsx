function Spinner({ size = "md" }) {
  const sizes = {
    sm: "w-5 h-5",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16  h-16",
  };

  return (
    <div
      className={`${sizes[size]} animate-spin rounded-full border-4 border-gray-300 border-t-blue-600`}
    ></div>
  );
}

export default Spinner;
