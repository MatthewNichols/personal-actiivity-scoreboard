export interface Activity {
    id: string;
    name: string;
    points: number;
}

export const ActivityList: Activity[] = [
    { id: "stairs", name: "Stairs 15 flights", points: 30 },
    { id: "bear-crawl", name: "Bear Crawl", points: 5 },
    { id: "reps-20", name: "20 Reps", points: 20 },
    { id: "reps-10", name: "10 Reps", points: 10 },
    { id: "reps-5", name: "5 Reps", points: 5 },
    { id: "cardio-20", name: "20 Mins Cardo", points: 30 },
    { id: "1hr-standing", name: "1 Hr Standing", points: 10 },
    { id: "stretching", name: "Stretching 5 mins", points: 10 }
];