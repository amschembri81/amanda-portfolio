import { useEffect, useState } from "react";

export default function useLiveData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8000/ws/stream");

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setData((prev) => [message, ...prev.slice(0, 49)]); // Keep latest 50
    };

    return () => socket.close();
  }, []);

  return data;
}
