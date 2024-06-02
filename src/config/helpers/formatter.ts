export class Formatter {
    public static currency (value: number): string {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(value)
    }

    public static rating(value: number): string {
        const factor = Math.pow(10, 1);
        const roundNumber = Math.round(value * factor) / factor;
        return roundNumber.toString()
    }
}