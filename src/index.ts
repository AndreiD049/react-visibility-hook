import { useEffect, useState } from "react";
import { isVisibilityAPISupported, VISIBILITYCHANGE_EVENT } from "./utils";

export interface IVisibilityState {
  visible: boolean;
  lastSeen: Date;
  sinceLastVisible: (this: IVisibilityState) => number;
}

export function useVisibility() {
  const isAPISupported = isVisibilityAPISupported();

  const [result, setResult] = useState<IVisibilityState>({
    visible: isAPISupported ? !window.document.hidden : true,
    lastSeen: new Date(),
    sinceLastVisible: function (this: IVisibilityState) {
      return Date.now() - this.lastSeen.getTime();
    },
  });

  useEffect(() => {
    function handleVisibilityChange(ev: Event) {
      const visible = !document.hidden;
      setResult((prev) => ({
        visible,
        lastSeen: visible ? prev.lastSeen : new Date(),
        sinceLastVisible: prev.sinceLastVisible,
      }));
    }
    document.addEventListener(
      VISIBILITYCHANGE_EVENT,
      handleVisibilityChange,
      false
    );
    return () =>
      document.removeEventListener(
        VISIBILITYCHANGE_EVENT,
        handleVisibilityChange
      );
  }, []);

  return result;
}
