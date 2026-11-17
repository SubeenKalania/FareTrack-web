function EmptyState({ icon, title, message }) {
  return (
    <div className="flex flex-col items-center gap-3 px-6 py-14 border border-dashed border-gray-700 rounded-2xl text-center">
      <div className="w-14 h-14 rounded-full bg-surfaceColor border border-gray-800 flex items-center justify-center text-gray-400">
        {icon}
      </div>
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-sm text-gray-400 max-w-md">{message}</p>
    </div>
  );
}

export default EmptyState;