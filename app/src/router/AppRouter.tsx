import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Professional from "../pages/professional/Professional";
import AddProfessional from "../pages/professional/AddProfessional";
import LoginForm from "../components/common/LoginForm";
import EditProfessionalPage from "../pages/professional/EditProfessionalPage";
import Dashboard from "../pages/dashboard/index.tsx";
import AdminList from "../pages/admin/AdminList.tsx"
import AddAdmin from "../pages/admin/AddAdmin.tsx";
import EditAdmin from "../pages/admin/EditAdmin.tsx";

const router = createBrowserRouter([
  {
    path: "/backoffice",
    element: <AdminLayout />,
    errorElement: <div>Not Found</div>,
    children: [
      {
                path: "dashboard",
                element: <Dashboard/>
       },
       {
        path: "admins",
        element: <AdminList />,
      },
      {
        path: "admins/create",
        element: <AddAdmin />,
      },
      {
        path: "admins/edit/:id",
        element: <EditAdmin />,
      },
      {
        path: "professionals",
        element: <Professional />,
      },
      {
        path: "professionals/create",
        element: <AddProfessional />,
      },
      {
        path: "professionals/edit/:id",
        element: <EditProfessionalPage />,
      },
      {
        path: "services",
        element: <div>Services</div>,
      },
      {
        path: "services/create",
        element: <div>Create Service</div>,
      },
      {
        path: "services/edit/:id",
        element: <div>edit service</div>,
      }
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
