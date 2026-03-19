"use client";
import { AppStore, CreateStore, PreloadType } from "@/shop/auth.shop";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import { Bounce, ToastContainer } from "react-toastify";

type ProviderProps = {
  children: ReactNode;
  preloadedState: PreloadType;
};

export default function providers({ children, preloadedState }: ProviderProps) {
  const storeRef = useRef<null | AppStore>(null);
  if (!storeRef.current) {
    storeRef.current = CreateStore(preloadedState);
  }

  return (
    <>
      <Provider store={storeRef.current}>
        {children}
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </Provider>
    </>
  );
}
