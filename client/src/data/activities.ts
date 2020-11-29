export interface Activity {
    id: string;
    name: string;
    points: number;
}

export const ActivityList: Activity[] = [
    { id: "stairs", name: "Climb 15 flights of stairs", points: 30 },
    { id: "pushups-20", name: "20 Pushups", points: 20 },
    { id: "pushups-10", name: "10 Pushups", points: 10 },
    { id: "bear-crawl", name: "Bear Crawl", points: 5 },
    { id: "cardio-20", name: "20 Mins Cardo", points: 30 },
    { id: "1hr-standing", name: "1 Hour standing-desk", points: 10 },
    { id: "stretching", name: "5 mins stretching", points: 10 }
];