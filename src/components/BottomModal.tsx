"use client";

interface bottomModalInterface {
  children: any;
  isOpen: boolean;
}
export default function BottomModal({
  children,
  isOpen,
}: bottomModalInterface) {
  {
    return (
      isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center">
        <div className="bg-white min-h-[300px] max-w-[616px] p-5 mx-3 fixed bottom-0 rounded-t-3xl z-110 shadow-xl">
          {children}
        </div>
        </div>
      )
    );
  }
}
