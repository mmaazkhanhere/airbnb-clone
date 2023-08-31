
export let selectedDateRange = [
    {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }
];

export function setSelectedDateRange(newDateRange: any) {
    selectedDateRange = newDateRange;
}
