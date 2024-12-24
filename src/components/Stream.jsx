import React from "react";

function Stream() {
  return (
    <div className="relative ">
      <img
        src="https://res.cloudinary.com/dxswouxj5/image/upload/v1734976180/african-american-couple-watching-streaming-service-together_1_a31xdz.jpg"
        alt=""
        className="h-[80vh] w-full object-cover absolute"
      />
      <div className="bg-black opacity-70 z-10 relative h-[80vh] w-full flex items-center justify-center">
        <button className="bg-green-600 rounded-full px-8 py-2 text-white font-bold text-2xl animate-bounce">
          Stream live!
        </button>
      </div>
    </div>
  );
}

export default Stream;
