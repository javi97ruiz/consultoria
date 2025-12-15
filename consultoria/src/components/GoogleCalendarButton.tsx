import { useEffect, useRef } from "react";

declare global {
    interface Window {
        calendar?: {
            schedulingButton: {
                load: (config: {
                    url: string;
                    color: string;
                    label: string;
                    target: HTMLElement | null;
                }) => void;
            };
        };
    }
}

export default function GoogleCalendarButton() {
    const buttonRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const loadButton = () => {
            if (!buttonRef.current || !window.calendar) return;

            window.calendar.schedulingButton.load({
                url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2ihr5e-pqcEauKrLHvlGZRyFHmPh91MrQh82rf3tC-5TbkzRONjHdp7TPTnsWtp_bCJbx3IhJp?gv=true",
                color: "#009688",
                label: "Solicitar análisis gratuito",
                target: buttonRef.current,
            });
        };

        // Cargar CSS
        if (
            !document.querySelector(
                'link[href="https://calendar.google.com/calendar/scheduling-button-script.css"]'
            )
        ) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href =
                "https://calendar.google.com/calendar/scheduling-button-script.css";
            document.head.appendChild(link);
        }

        // Cargar script
        if (!document.getElementById("google-calendar-script")) {
            const script = document.createElement("script");
            script.id = "google-calendar-script";
            script.src =
                "https://calendar.google.com/calendar/scheduling-button-script.js";
            script.async = true;
            script.onload = loadButton;
            document.body.appendChild(script);
        } else {
            loadButton();
        }
    }, []);

    return <div ref={buttonRef} />;
}
