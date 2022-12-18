import { add } from "../build/wasm/release.js"

// create a wrapper
export function addWrapper(a: number, b: number ): number {
  return add(a,b);
}

// re-export from generated binding
export { add } from "../build/wasm/release.js"
