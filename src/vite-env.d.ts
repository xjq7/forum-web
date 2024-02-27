/// <reference types="vite/client" />

declare module '*.png';
declare module '*.gif';
declare module '*.css';
declare module '*.svg';
declare module '*.less' {
  const css: Record<string, string>;
  export default css;
}
