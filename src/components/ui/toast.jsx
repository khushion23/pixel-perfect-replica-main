// Removed: migrated to .jsx
import React from "react";

export function Toast({ children, ...props }) {
  return <div {...props}>{children}</div>;
}
export function ToastClose(props) {
  return <button {...props}>Close</button>;
}
export function ToastDescription({ children, ...props }) {
  return <div {...props}>{children}</div>;
}
export function ToastProvider({ children }) {
  return <div>{children}</div>;
}
export function ToastTitle({ children, ...props }) {
  return <strong {...props}>{children}</strong>;
}
export function ToastViewport(props) {
  return <div {...props} />;
}
