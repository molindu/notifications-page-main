import styles from './Container.module.css';
import {NotificationType} from "../../types/type.ts";
import Notification from "../notification/Notification.tsx";

type ContainerProps = {
    data: NotificationType[];
    onRead: (id: string) => void;
    unreadCount: number;
    markAllAsRead: () => void;
};

const Container = ({data, onRead, unreadCount, markAllAsRead}: ContainerProps) => {
    return (
        <div className={styles.main}>
            <div className={`${styles.container}`}>
                <div className={styles.container__inner}>
                    <div className={styles.notification__text}>
                        Notifications
                        <span
                            className={`${styles.notification__count} ${unreadCount === 0 && 'hidden'}`}>{unreadCount}</span>
                    </div>
                    <div className={styles.notification__read} onClick={markAllAsRead}>Mark all as read</div>
                </div>
                {data.map((notification, index) => (
                    <Notification
                        key={index}
                        notification={notification}
                        onRead={onRead}
                    />
                ))}
            </div>
        </div>
    );
};

export default Container;
