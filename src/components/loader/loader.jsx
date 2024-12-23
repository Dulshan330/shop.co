import React from "react";

const Loader = () => {
  return (
    <div class="flex-col gap-4 w-full h-screen flex items-center justify-center">
      <div class="w-20 h-20 border-4 border-transparent text-black text-4xl animate-spin flex items-center justify-center border-t-black rounded-full">
        <div class="w-16 h-16 border-4 border-transparent text-black text-2xl animate-spin flex items-center justify-center border-t-black rounded-full"></div>
      </div>
    </div>
  );
};

export default Loader;
