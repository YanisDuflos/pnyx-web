import ReactGA from "react-ga";

function useAnalyticsEventTracker(category, action, label) {
    return ReactGA.event({ category, action, label });
}

export default useAnalyticsEventTracker;
