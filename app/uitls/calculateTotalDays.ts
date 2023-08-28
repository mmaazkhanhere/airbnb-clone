export default function calculateTotalDays(startDate: Date, endDate: Date): number {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const oneDay = 24 * 60 * 60 * 1000; // Milliseconds in a day

    const timeDifference = Math.abs(end.getTime() - start.getTime());
    const totalDays = Math.round(timeDifference / oneDay) + 1;

    return totalDays;
}