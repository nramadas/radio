declare module '*.scss' {
  const styles: { [className: string]: string };
  export default styles;
}

declare module '*.worker.ts' {
  class CustomWorker extends Worker {
    constructor();
  }

  export default CustomWorker;
}

declare module '*.gql' {
  import { DocumentNode } from 'graphql';
  const content: DocumentNode;
  export default content;
}

interface IdleDeadline {
  timeRemaining(): DOMHighResTimeStamp;
  readonly didTimeout: boolean;
}

interface IdleRequestOptions {
  timeout: number;
}

type IdleCallbackHandle = number;

type IdleRequestCallback = (deadline: IdleDeadline) => void;

declare global {
  interface Window {
    requestIdleCallback(
      callback: IdleRequestCallback,
      options?: IdleRequestOptions,
    ): IdleCallbackHandle;
    cancelIdleCallback(handle: number): void;
  }
}

declare function requestIdleCallback(
  callback: IdleRequestCallback,
  options?: IdleRequestOptions,
): number;
declare function cancelIdleCallback(handle: number): void;

declare function request(
  callback: IdleRequestCallback,
  options?: IdleRequestOptions,
): IdleCallbackHandle;
declare function cancel(handle: IdleCallbackHandle): void;
