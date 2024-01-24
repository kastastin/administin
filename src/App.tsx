import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Authenticated, Refine } from "@refinedev/core";
import { App as AntdApp } from "antd";
import { useNotificationProvider } from "@refinedev/antd";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import routerBindings, {
  CatchAllNavigate,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";

import Layout from "./components/layout";
import { resources } from "./config/resources";
import { authProvider, dataProvider, liveProvider } from "./providers";
import { Home, ForgotPassword, Login, Register, CompanyList } from "./pages";
import Create from "./pages/company/create";

import "@refinedev/antd/dist/reset.css";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <AntdApp>
          <DevtoolsProvider>
            <Refine
              dataProvider={dataProvider}
              liveProvider={liveProvider}
              notificationProvider={useNotificationProvider}
              routerProvider={routerBindings}
              authProvider={authProvider}
              resources={resources}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                useNewQueryKeys: true,
                projectId: "mr4vj2-WWehZH-yDQMB8",
                liveMode: "auto",
              }}
            >
              <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route
                  element={
                    <Authenticated
                      key="authenticated-layout"
                      fallback={<CatchAllNavigate to="/login" />}
                    >
                      <Layout>
                        <Outlet />
                      </Layout>
                    </Authenticated>
                  }
                >
                  <Route index element={<Home />} />
                  <Route path="/companies">
                    <Route index element={<CompanyList />} />
                    <Route path="new" element={<Create />} />
                  </Route>
                </Route>
              </Routes>
              <RefineKbar />
              <UnsavedChangesNotifier />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </AntdApp>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
