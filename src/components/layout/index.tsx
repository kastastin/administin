import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd";

import Header from "./header";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
      // initialSiderCollapsed={true}
      Header={Header}
      Title={(titleProps) => (
        <ThemedTitleV2 {...titleProps} text="Administin" />
      )}
    >
      {children}
    </ThemedLayoutV2>
  );
};

export default Layout;
