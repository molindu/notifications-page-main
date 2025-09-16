import {useEffect, useState} from "react";
import {NotificationType} from "./types/type.ts";
import Container from "./components/container/Container.tsx";
import Loading from "./components/Loading.tsx";

const App = () => {
    const [notifications, setNotifications] = useState<NotificationType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true);
        fetch("https://684ce0bf65ed087139147af0.mockapi.io/notifications")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch notifications");
                }
                return res.json();
            })
            .then((data) => setNotifications(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    const handleRead = (id: string) => {
        setNotifications((prev) =>
            prev.map((n) =>
                n.id === id ? {...n, isUnread: false} : n
            )
        );
    };
    const markAllAsRead = () => {
        setNotifications((prev) => prev.map((n) => ({...n, isUnread: false})));
    };

    const unreadCount = notifications.filter((n) => n.isUnread).length;
    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
    }

    return <Container data={notifications} onRead={handleRead} unreadCount={unreadCount} markAllAsRead={markAllAsRead} />;
};

export default App;
