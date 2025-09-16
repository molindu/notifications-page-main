import {NotificationType} from "../../types/type.ts";
import styles from "./Notification.module.css";
import UnReadSign from "../UnReadSign.tsx";

type NotificationProps = {
    notification: NotificationType;
    onRead: (id: string) => void;
};

const Notification = ({notification, onRead}: NotificationProps) => {
    const handleClick = () => {
        if (notification.id) {
            onRead(notification.id);
        }
    };

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.container_inner} ${notification.isUnread? 'bg-Navy-50 cursor-pointer' : 'bg-White'}`} onClick={handleClick}>
                <div className={`${styles.notification}`}>
                    <img
                        src={notification.userAvatar}
                        alt={notification.userName}
                        className={`${styles.notification__userAvatar}`}
                    />
                    <div className={`${styles.notification__inner}`}>
                        <div className={`${styles.notification__body}`}>
                            <div>
                            <span className={`${styles.userName}`}>
                                {`${notification.userName} `}
                            </span>
                                <span className={`${styles.action}`}>
                                {` ${notification.action} `}
                            </span>
                                {notification.target &&
                                    <span className={`${styles.target}`}>
                                {notification.target}
                            </span>}
                                {notification.group &&
                                    <span className={`${styles.group}`}>
                                {notification.group}
                            </span>}
                            </div>
                            {notification.isUnread && <UnReadSign/>}
                        </div>
                        <div className={`${styles.timeAgo}`}>
                            {notification.timeAgo}
                        </div>
                    </div>
                </div>
                {
                    notification.postImage &&
                    <img
                        src={notification.postImage}
                        alt={notification.userName}
                        className={`${styles.postImage}`}
                    />
                }
            </div>
            <div
                className={`${styles.message} ${notification.message === null && 'hidden'}`}>
                {notification.message}
            </div>
        </div>
    );
};

export default Notification;