function Avatar({ name, size = "md" }) {
  const initial = name.charAt(0).toUpperCase();

  const sizes = {
    md: "w-20 h-20 text-4xl",
    sm: "w-10 h-10 text-lg",
  };

  return (
    <>
      <div
        className={`${sizes[size]} rounded-full bg-bodyBg flex items-center justify-center font-bold text-cyan-400 font-inter border border-gray-800`}
      >
        {initial}
      </div>
    </>
  );
}

export default Avatar;
