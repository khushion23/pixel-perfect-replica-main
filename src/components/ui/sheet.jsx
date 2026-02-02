import React from "react";

export function Sheet({ open, onOpenChange, children }) {
  return open ? children : null;
}

export function SheetContent({ side = "right", className = "", children }) {
  return (
    <div
      className={`fixed top-0 ${side === "right" ? "right-0" : "left-0"} h-full z-50 bg-white shadow-lg transition-transform duration-300 ${className}`}
      style={{ width: "75vw", maxWidth: 320 }}
    >
      {children}
    </div>
  );
}
