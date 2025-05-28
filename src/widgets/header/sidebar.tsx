import { memo } from "react";
import { navigationList } from "../../shared/constants/navigation";
import { SidebarItem } from "./sidebar-item";
import styles from "./styles.module.css";

export type SidebarPropsType = {
  handler: (link: string) => void;
};

export const Sidebar = memo(({ handler }: SidebarPropsType) => {
  console.log(navigationList);
  return (
    <div className={styles.sidebar}>
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
