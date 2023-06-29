import type { ComponentProps, FunctionComponent, ReactNode } from "react";
import { DefaultToastItem } from "./DefaultItem";
import Manager from "./Manager";
import type { Options } from "./types";
import { render } from "react-dom";

class Toast {
  portal: HTMLElement | null = null;
  createToast: Parameters<ComponentProps<typeof Manager>["bind"]>[0] | null =
    null;

  constructor(
    options: {
      ToastItem?: ComponentProps<typeof Manager>["ToastItem"];
    } = {}
  ) {
    const { ToastItem } = options;

    const portalElement = document.getElementById("toast-portal");

    if (portalElement) {
      this.portal = portalElement;
    } else {
      const newPortal = document.createElement("div");
      newPortal.id = "toast-portal";
      newPortal.style.left = "0";
      newPortal.style.right = "0";
      newPortal.style.bottom = "0";
      newPortal.style.zIndex = "9999";
      newPortal.style.position = "fixed";
      this.portal = newPortal;
      document.body.appendChild(this.portal);
    }

    render(
      <Manager
        bind={(createToast) => {
          this.createToast = createToast;
        }}
        ToastItem={ToastItem ?? DefaultToastItem}
      />,
      this.portal
    );
  }

  show(
    Content: ReactNode | FunctionComponent<{ options: Options }>,
    options: Options = { delay: 500, duration: 2000 }
  ) {
    const { delay = 500, duration = 2000 } = options;
    const content =
      typeof Content === "function" ? <Content options={options} /> : Content;

    this.createToast?.(content, { delay, duration });
  }
}

export default Toast;
