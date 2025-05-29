import { memo, useRef } from "react";
import { navigationList } from "../../shared/constants/navigation";
import { SidebarItem } from "./sidebar-item";
import styles from "./styles.module.css";
import { useOnClickOutside } from "../../shared/hooks";

export type SidebarPropsType = {
  handler: () => void;
};

export const Sidebar = memo(({ handler }: SidebarPropsType) => {
  const ref = useRef(null);

  useOnClickOutside(ref, handler);

  return (
    <div className={styles.sidebar} ref={ref}>
      <ul className={styles.list}>
        {navigationList.map((nav) => (
          <SidebarItem
            key={nav.name}
            name={nav.name}
            link={nav.link}
            handler={handler}
          />
        ))}
      </ul>
    </div>
  );
});
