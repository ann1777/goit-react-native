declare module "react-native" {
  interface WebSocket {
    onerror: ((event: WebSocketErrorEvent) => void) | null;
    onclose: ((event: WebSocketCloseEvent) => void) | null;
  }
}

declare type XMLHttpRequestResponseType =
  | ""
  | "arraybuffer"
  | "blob"
  | "document"
  | "json"
  | "text";
