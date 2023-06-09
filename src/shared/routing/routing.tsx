import { lazy } from "react";

const HomePage = lazy(() => import("../../pages/home-page/home-page"));
const InterviewPage = lazy(() => import("../../pages/interview-page/interview-page"));
const LeetcocePage = lazy(() => import("../../pages/leetcode-page/leetcode-page"));
const SearchPage = lazy(() => import("../../pages/search-page/search-page"));
const SortingPage = lazy(() => import("../../pages/sorting-page/sorting-page"));
const TaskPage = lazy(() => import("../../pages/task-page/task-page"));
const TreePage = lazy(() => import("../../pages/tree-page/tree-page"));
const PrototypePage = lazy(() => import("../../pages/prototype-page/prototype-page"));
const NotFoundPage = lazy(() => import("../../pages/not-found-page/not-found-page"));

export const RoutingPaths = [
  {
    path: "/",
    element: <HomePage />,
    id: "home",
  },
  {
    path: "/search",
    element: <SearchPage />,
    id: "search",
  },
  {
    path: "/search/:id",
    element: <TaskPage />,
    id: "search-task",
  },
  {
    path: "/sorting",
    element: <SortingPage />,
    id: "sorting",
  },
  {
    path: "/sorting/:id",
    element: <TaskPage />,
    id: "sorting-task",
  },
  {
    path: "/tree",
    element: <TreePage />,
    id: "tree",
  },
  {
    path: "/tree/:id",
    element: <TaskPage />,
    id: "tree-task",
  },
  {
    path: "/interview",
    element: <InterviewPage />,
    id: "interview",
  },
  {
    path: "/interview/:id",
    element: <TaskPage />,
    id: "interview-task",
  },
  {
    path: "/leetcode",
    element: <LeetcocePage />,
    id: "leetcode",
  },
  {
    path: "/leetcode/:id",
    element: <TaskPage />,
    id: "leetcode-task",
  },
  {
    path: "/prototype",
    element: <PrototypePage />,
    id: "prototype",
  },
  {
    path: "/prototype/:id",
    element: <TaskPage />,
    id: "prototype-task",
  },
  {
    path: "*",
    element: <NotFoundPage />,
    id: "notFound",
  },
];
