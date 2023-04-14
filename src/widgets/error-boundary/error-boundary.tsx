import { Component, ErrorInfo, ReactNode } from "react";
import { RelocateToHome } from "../../features";
import styles from "./styles.module.css";

export interface Props {
  children?: ReactNode;
}

export interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className={styles.wrapper}>
          <h5 className={styles.title}>Простите... что-то пошло не так</h5>
          <RelocateToHome />
        </div>
      );
    }

    return this.props.children;
  }
}
